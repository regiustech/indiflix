import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
        },
        email: {
            type: String,
            required: [true, "Please add a an email"],
        },
        password: {
            type: String,
            requried: [true, 'Please add password'],
            minlength: [6, 'password must be atleast 6 character'],
        },
        image: {
            type: String,
        },
        role: {
            type: String,
            trim: true,
            enum: ['admin', 'content-creator', 'user',],
            required: [true, "Specify role"],
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        isRegistered: {
            type: Boolean,
            default: false,
        },
        likedMovies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Movies",
            }
        ],
        mobileNumber: {type: String},
        address: {type: String},
        productionHouseName: { type: String },
        productionHouseDocument: { type: String },
        note: { type: String },
        adhaarNumber: { type: String },
        panNumber: { type: String },
    },
    {
        timeStamps: true,
    }
);

export default mongoose.model("User", UserSchema);
