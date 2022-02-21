const express = require("express");
const router = express.Router();
require("dotenv").config();
const { createCompany } = require("../modules/login/signup_company.m");
const { createUser } = require("../modules/login/signup_user.m");
const { login } = require("../modules/login/login.m");



router.post(process.env.login, login)
        .post(process.env.signup_user, createUser)
        .post(process.env.signup_company, createCompany)


module.exports = router;