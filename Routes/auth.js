const express = require("express");
const { User }= require("../models/user")
const bcrypt= require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");

const validate = (auth) => {
    const Schema = joi.object({
    email: joi.string().email().required(),
    password : joi.string().required()
})

return Schema.validate(auth)
}

const router = express.Router();

router.post("/", async (req, res) =>
{
 const { error } = validate(req.body);
 if (error) return res.status(400).json({ message : error.details[0].message});

 const user = await User.findOne({ email: req.body.email})
 if (!user) return res.status(401).json({ message : "email or pass is not correct"});

 const isValidPassword = await bcrypt.compare(req.body.password, user.password)
 if (!isValidPassword) return res.status(401).json({ message : "email or pass incorrect "});

 const token = jwt.sign({_id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)
 res.json({ token });
})

module.exports = router