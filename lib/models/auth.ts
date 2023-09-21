import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Please write your fullname"],
  },
  email: {
    type: String,
    required: [true, "Please provide a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpire: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
