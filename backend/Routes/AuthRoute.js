const express = require('express')
const SignInAuth = require('../Controller/SignInController')
const SignUpAuth = require('../Controller/SignUpController')

const AuthRouter = express.Router()

AuthRouter.post('/signup', SignUpAuth)
AuthRouter.post('/signin', SignInAuth)

module.exports = AuthRouter