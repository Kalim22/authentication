const express = require("express");

const route = express.Router();

const { userRegister, verifyUser, userLogin } = require("../controllers/Authenticate");

const { verifyToken } = require("../middlerwares/verifyToken");

route.post("/api1/adduser", userRegister);
route.get("/api1/verifyuser/:token", verifyToken , verifyUser);
route.post("/api1/userlogin", userLogin)

module.exports = route;
