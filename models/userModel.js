// server/models/userModel.js
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: String,
});

const User = mongoose.model("user", UserSchema);

export default User;
