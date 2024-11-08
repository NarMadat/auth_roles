const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middleware/authMiddleware')

router.post('/registration', [
	check('username', "Username can not be empty").notEmpty(),
	check('password', "Password can be 4 - 10 symbols").isLength({min: 4, max: 10})
], controller.regsitration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)

module.exports = router