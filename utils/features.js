import { serialize } from "cookie";
import mongoose from "mongoose";
import { Jwt } from "jsonwebtoken";
export const connectDb = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "NextTodo",
  });
  console.log(`DB CONNECTED on ${connection.host}`);
};

export const cookieSetter = (res, set) => {
  const token = "SDasda";
  res.setHeader(
    "Set-Cookie",
    serialize("token", token, set ? token : "", {
      path: "/",
      httpOnly: true,
      maxAge: set ? 10 * 24 * 60 * 60 * 1000 : 0,
    })
  );
};

export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};
