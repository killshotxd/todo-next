import { connectDb } from "../../utils/features";
import { Task } from "../../models/task";
import { asyncError, errorHandler } from "../../middlewares/error";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Only POST method is allowed!");

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
});

export default handler;
