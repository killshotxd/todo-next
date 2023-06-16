import { connectDb } from "../../utils/features";
import { Task } from "../../models/task";

const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(400).json({
      success: false,
      message: "Only POST method is Allowed",
    });

  await connectDb();

  const { title, description } = req.body;

  await Task.create({
    title,
    description,
    user: "adsd",
  });
  res.json({
    success: true,
    message: "Task Created !",
  });
};

export default handler;
