import asyncHandler from "express-async-handler";
import UserModel from "../Models/UserModel.js";
import Auth from "../Models/AuthModel.js";
import bcryptjs from "bcryptjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import pkg from "passport";
import { generateToken } from "../midddleware/Auth.js";
import express from "express";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";

//  export const registerUser = asyncHandler(async(req,res)=>{
//     console.log(req.body);
//     const {fullName,email, password,image} = req.body
//     try{
//         const userExists = await UserModel.findOne({email})
//         if(userExists){
//             res.status(400)
//             throw new Error("user already exists");
//         }

//         //const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, 7);

//         const user =  await UserModel.create({
//             fullName,
//             email,
//             password:hashedPassword,
//             image,
//         });

//         if(user){
//             res.status(201).json({
//                 _id:user._id,
//                 fullName:user.fullName,
//                 email:user.email,
//                 image:user.image,
//                 isAdmin:user.isAdmin,
//                 //token:generateToken(user_id),

//             });
//         }else{
//             res.status(400);
//             throw new Error("Invalid user data");
//         }

//     }catch(error){}
// })

async function sendPasswordResetEmail(userEmail, otp) {
  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail", // You can replace this with your SMTP settings
    auth: {
      user: "dummyemail.qubycles@gmail.com",
      pass: "vtchwbyytazvylif",
    },
  });

  // Setup email data
  let mailOptions = {
    from: '"Netflix" <dummyemail.qubycles@gmail.com>',
    to: userEmail,
    subject: "Password Reset Request",
    text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
    Please paste this into your browser to complete the process:\n\n
           ${otp}\n\n
    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  // Send mail with defined transport object
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Password reset email sent:", info.messageId);
    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return false; // Failed to send email
  }
}

function generateOTP(length) {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}
// Function to save OTP in the database
async function saveOTP(email, otp, expiryTime) {
  const otpEntry = new Auth({ email, otp, expiryTime });
  await otpEntry.save();
}

// Function to retrieve OTP from the database
async function getOTP(otp) {
  return await Auth.findOne({ otp });
}

// Function to remove OTP from the database
async function removeOTP(otp) {
  await OTP.deleteOne({ otp });
}

// Function to verify OTP
async function verifyOTP(userEnteredOTP) {
  const otpInfo = await getOTP(otp);

  if (!otpInfo) {
    return false; // OTP not found in the database
  }

  const { otp, expiryTime } = otpInfo;

  if (otp !== userEnteredOTP) {
    return false; // OTP does not match
  }

  if (expiryTime <= Date.now()) {
    await removeOTP(otp); // Remove expired OTP from the database
    return false; // OTP has expired
  }

  await removeOTP(otp); // Remove OTP after successful verification
  return true; // OTP is valid
}

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: "fill the details" });
  }
  try {
    const userForgot = await UserModel.findOne({ email: email });
    if (!userForgot) {
      res.status(400).json({ error: "user does not exist" });
    } else {
      let otp = generateOTP(6);
      const expiryTime = new Date(Date.now() + 5 * 60 * 1000);
      sendPasswordResetEmail(email, otp);
      saveOTP(email, otp, expiryTime);

      res.json({ message: "Reset link sent to your email" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const verifyToken = async (req, res) => {
  const { otp } = req.body;
  // try {
  //   const authUser = await Auth.findOne({ otp });
  //   if (!authUser) {
  //     res.json({ error: "No otp requested" });
  //   } else {
  //     verifyOTP(authUser)
  //       .then((isValidOTP) => {
  //         if (isValidOTP) {
  //           console.log("OTP is valid");
  //         } else {
  //           console.log("OTP is invalid or expired");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
  if (!otp) {
    res.status(400).json({ error: "fill the details" });
  }
  try {
    const verifyOTP = await Auth.findOne({ otp: otp });
    if (!verifyOTP) {
      res.status(400).json({ error: "wrong otp entered" });
    } else {
      res.json({ message: "otp verified" });
      const deleteEntry = await Auth.deleteOne({ otp: otp });
      res.status(201).json({ message: "otp entry deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const resetPassword = async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;
  try {
    const userLogin = await UserModel.findOne({ email: email });

    if (userLogin) {
      console.log(newPassword);

      if (newPassword === confirmPassword) {
        console.log("true");
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const response = await UserModel.findOneAndUpdate(
          { email },
          { password: hashedPassword },
          { new: true }
        );

        const storedata = await response.save();
        console.log(response + "password successfully changed");
        res.status(201).json(storedata);
      } else {
        res.status(400).json({ error: " password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "user doesn't exist" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const registerUser = async (req, res) => {
  const { fullName, email, password, image, role } = req.body;

  try {
    const preuser = await UserModel.findOne({ email });
    if (preuser) {
      res.status(422).json({ error: "This email is already exist" });
      //   } else if (password !== cpassword) {
      //     res.status(422).json({ error: "password are not matching" });;
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const finaluser = new UserModel({
        fullName: fullName,
        email: email,
        password: hashedPassword,
        image: image,
        role
        //isAdmin:isAdmin,
        //token:generateToken(id),
      });

      // yaha pe hasing krenge

      const storedata = await finaluser.save();
      // console.log(storedata + "user successfully added");
      res.status(201).json(storedata);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {email, ...data} = req.body;
    for (let key in req.files) {
      if (key === "image") {
        data.image = `${process.env.FRONT_URL}/api/get-image/${req.files[key][0].filename}`;
      }
      if (key === "productionHouseDocument") {
        data.productionHouseDocument = `${process.env.FRONT_URL}/api/get-image/${req.files[key][0].filename}`;
      }
    };

    const userDetail = await UserModel.findOneAndUpdate({ email }, data,  { new: true }).lean();
    delete userDetail.password;

    return res.status(200).json({ message: "successfully updated", detail: userDetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// export const loginUser = asyncHandler(async(req,res)=>{
//    const {email, password} = req.body;
//    try{
//       const user = await User.findOne({email});
//       if(user &&(await bcrypt.compare(password,user.password))){
//           res.json({
//               _id:user_id,
//               fullName:user.fullName,
//               email:user.email,
//               image:user.image,
//               isAdmin:user.isAdmin,
//               token:generateToken(user_id),
//           })
//       } else{
//           res.status(401);
//           throw new Error("invalid email or passoword")
//       }

//    } catch(error){
//       res.status(400).json({message:error.me})
//    }
// })
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "fill the details" });
  }
  try {
    const userlogin = await UserModel.findOne({ email: email }).lean();
    const isMatch = await bcrypt.compare(
      String(password),
      String(userlogin.password)
    );
    if (userlogin) {
      console.log("is match", isMatch);
    } else {
      res.status(400).json({ error: "user not exist" });
    }
    if (!isMatch) {
      res.status(400).json({ error: "invalid crediential pass" });
    } else {
      // Generate a JWT token
      const token = jwt.sign({ userId: UserModel._id }, "MySecretKey", {
        expiresIn: "1d",
      });
      await UserModel.findOneAndUpdate(
        { email },
        { tokens: { token } },
        { new: true }
      );
      // res.cookie("AsmiBoutique", token, {
      //   expires: new Date(Date.now() + 2589000),
      //   httpOnly: true
      // });
      // Send the token back to the user
      // const response = {
      //   fullName: userlogin.fullName,
      //   email: userlogin.email,
      //   role: userlogin.role,
      //   image: userlogin.
      // }
      delete userlogin.password;
      res.status(201).json({ detail: userlogin, token });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const changeUserPassword = asyncHandler(async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (
      user &&
      (await bcrypt.compare(String(oldPassword), String(user.password)))
    ) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      res.json({ message: "Password Change" });
    } else {
      res.status(401);
      throw new Error("Invalid old password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const getLikedMovies = asyncHandler(async (req, res) => {
  try {
    const user = await UserModel.findById(req._id).populate("likedMovies");
    if (user) {
      res.status(400);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const addLikedMovie = asyncHandler(async (req, res) => {
  const { movieId } = req.body;
  try {
    const user = await UserModel.findById(req._id);
    if (user) {
      if (user.likedMovies.includes(movieId)) {
        res.status(400);
        throw new Error("Movie already liked");
      }
      user.likedMovies.push(movieId);
      await user.save();
      res.json(user.likedMovies);
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json("message:error.message");
  }
});

export const makePayment = asyncHandler(async (req, res) => {
  try{
    const razorpay = Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    });

    if(!req.body){
        return res.status(400).send("Bad request")
    }

    const options = req.body;

    const order = await razorpay.orders.create(options);

    if(!order){
        return res.status(400).send("Bad request")
    }
    res.json(order);
}
catch(error){
    console.log(error)
}
});
