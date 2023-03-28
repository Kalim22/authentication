const express = require("express");

const route = express.Router();

const { userRegister, verifyUser } = require("../controllers/Authenticate");

const { verifyToken } = require("../middlerwares/verifyToken");

route.post("/api1/adduser", userRegister);
route.put("/api1/verifyuser/:token", verifyToken, verifyUser);

module.exports = route;
