import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().min(3).max(30).required().email(),
  password: Joi.string().min(3).max(30).required(),
});

const postLogin = async (req, res) => {
  res.send("Login route");
};

export default { postLogin, loginSchema };
