const user = require("../modals/user");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { mailsend } = require("../utils/sendmail");

const path = require("path");

const userRegister = async (req, res) => {
  const { name, email, age, gender, password } = req.body;

  if (!(name && email && age && gender && password)) {
    return res.status(401).send("All fields are mandatory!");
  }

  try {
    const existingUser = await user.findOne({ email });

    const hashPassword = await bcrypt.hash(password, 10);

    if (!existingUser) {
      const newUser = new user({
        name,
        email,
        age,
        gender,
        password: hashPassword,
      });

      const token = jwt.sign({ email: email }, process.env.MYSECRETKEY, {
        expiresIn: "2h",
      });

      newUser.token = token;

      await newUser.save();

      await mailsend(
        email,
        `http://localhost:8000/${token}`,
        `http://localhost:8000/${token}`
      );

      return res
        .status(201)
        .json({ staus: "true", msg: "user has been created", token: token });
    }
    return res
      .status(404)
      .json({ staus: "false", err: "user already existed!" });
  } catch (error) {
    console.log(error);
  }
};

const verifyUser = async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(404).json({ err: "Token not found!" });
  }
  try {
    const updateUser = await user.findOneAndUpdate(
      { token: token },
      { $set: { userIsActive: true } },
      { upsert: true }
    );

    return res.render("index");

    // return res.status(201).json({
    //   status: "success",
    //   msg: "Your account has been activated. Now you can login",
    // });
  } catch (error) {
    return res.json({ err: error });
  }
};

module.exports = {
  userRegister,
  verifyUser,
};
