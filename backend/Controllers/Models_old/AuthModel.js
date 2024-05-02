import mongoose from "mongoose";
const AuthSchema = mongoose.Schema({
  email: {
    type: String,
  },
  otp: {
    type: Number,
  },
  expiryTime: {
    type: Date,
  },
});

export default mongoose.model("Auth", AuthSchema);
