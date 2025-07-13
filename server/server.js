import express from "express";

import cors from "cors";

import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = "mongodb://127.0.0.1:27017/demo";
await mongoose.connect(mongoURI);

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
});

const User = mongoose.model("User", userSchema);

app.post("/test", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  console.log(name, email, phone, message);

  if (name.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter correct name" });
  }

  if (message.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter message" });
  }

  const user = await User.create({ name, email, phone, message });
  return res.status(200).json({ success: true, user });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
