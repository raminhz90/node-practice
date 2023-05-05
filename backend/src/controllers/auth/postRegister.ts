import Joi from "joi";
const registerSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(30).required().email(),
    password: Joi.string().min(3).max(30).required(),
    repeat_password: Joi.ref('password'),
  });

const postRegister = async (req, res) => {
    res.send("Register route");
};

export default {postRegister,registerSchema};