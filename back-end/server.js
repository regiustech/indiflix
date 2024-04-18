import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import userRouter from "./Routes/UserRouter.js";
import { errorHandler } from "./midddleware/errorMiddlewares.js";
import moviesRouter from "./Routes/MoviesRouter.js";
import MoviesModel from "./Models/MoviesModel.js";
import bodyparser from 'body-parser';
import multer from 'multer';
import { updateProfile } from "./Controllers/UserControllers.js";
import path from "path";
import crypto from "crypto";
import Razorpay from "razorpay";
//import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, `./assets/profile-images/`)
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

export const upload = multer({ storage: storage })

connectDB();

app.get("/", (req, res) => {
    res.send('API is runnig...');
})

app.use('/api/get-image/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const absolutePath = path.join(process.cwd(), `/assets/profile-images/${imageName}`);
    return res.sendFile(absolutePath)
})

app.use("/api/users", userRouter);
app.put("/api/users/profile", upload.fields([{ name: "image", maxCount: 1 }, { name: "productionHouseDocument", maxCount: 1 }]), updateProfile);
app.use("/api/movies", moviesRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 6000;

// app.post("/users/payment", async(req, res) => {
//     try{
//         const razorpay = Razorpay({
//             key_id: process.env.RAZORPAY_KEY_ID,
//             key_secret: process.env.RAZORPAY_KEY_SECRET
//         });

//         if(!req.body){
//             return res.status(400).send("Bad request")
//         }

//         const options = req.body;

//         const order = await razorpay.orders.create(options);

//         if(!order){
//             return res.status(400).send("Bad request")
//         }
//         res.json(order);
//     }
//     catch(error){
//         console.log(error)
//     }
// })
app.listen(PORT,()=>{
    console.log(`Server is running in http://localhost/${PORT}`);
});