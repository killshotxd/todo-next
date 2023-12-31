import { User } from "../../../models/user";
import {
  connectDb,
  cookieSetter,
  generateToken,
} from "../../../utils/features";

const { asyncError, errorHandler } = require("../../../middlewares/error");

const handler = asyncError(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return errorHandler(res, 400, "Please enter all fields!");

  await connectDb();

  let user = await User.findOne({ email });

  if (user)
    return errorHandler(
      res,
      400,
      "User is already registered with this email!"
    );

  user = await User.create({
    nam,
    email,
    password,
  });

  const token = generateToken(user._id);

  cookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: "Registered Successfully",
  });
});

export default handler;
