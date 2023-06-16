import mongoose from "mongoose";

export const connectDb = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "NextTodo",
  });
  console.log(`DB CONNECTED on ${connection.host}`);
};
