const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require("./config")


const generateAccesToken = (id, roles) => {
	const payload = {
		id,
		roles
	}
	return jwt.sign(payload, secret, {expiresIn: "24"})
}

class authController {
	async regsitration(req, res){
		try{
			const errors = validationResult(req)
			if(!errors.isEmpty()){
				return res.statys(400).json({message: "Registration errors: ", errors})
			}
			const { username, password } = req.body
			const candidate = await User.findOne({username})
			if(candidate){
				return res.status(400).json({message: 'User already exist.'})
			}
			
			const hashPassword = bcrypt.hashSync(password, 7)
			const userRole = await Role.findOne({value: "USER"})
			const user = new User({username, password: hashPassword, roles: [userRole.value]})
			await user.save()
			return res.json({message: "Your new userr was registred! Ura!"})
		} catch(e){
			console.log(e)
			res.status(400).json({message: 'Registration error'})
		}
	}
	
	async login(req, res){
		try{
			const {username, password} = req.body
			const user = await User.findOne({username})
			if(!user){
				return res.status(400).json({message: `Username ${username} not found`})
			}

			const validPassword = bcrypt.compareSync(password, user.password)
			if(!validPassword){
				return res.status(400).json({message: "Incorrect password"})
			}
			const token = generateAccesToken(user._id, user.roles)
			return res.json({token})
		} catch(e){
			
		}
	}
	
	async getUsers(req, res){
		try{
			const users = await User.find()
			res.json(users)
		} catch(e){
			console.log(e)
		}
	}
}

module.exports = new authController()