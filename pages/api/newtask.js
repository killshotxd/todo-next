import { connectDb } from "../../utils/features";
import { Task } from "../../models/task";
const handler = async (req, res) => {
  await connectDb();

  await Task.create({
    title: "Sample Title",
    description: "Sample Des",
    user: "adsd",
  });
  res.json({
    success: true,
  });
};

export default handler;
