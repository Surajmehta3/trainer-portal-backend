import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";

async function handleLogin(req, res, next) {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const secretKey = process.env['SECRET_TOKEN']
  const token = jwt.sign({ userId: user._id, userName: user.userName }, secretKey, { expiresIn: '1d' })
  
  res.set('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=none;`);
  return res.sendStatus(200);
}

export default handleLogin;
