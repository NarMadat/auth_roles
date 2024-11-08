const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const authRouter = require('./authRouter')
app.use(express.json())
app.use("/auth", authRouter)

const URL = `mongodb+srv://narek:252005@cluster0.4vtzp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const start = async() => {
	try{
		await mongoose.connect(URL)
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch(e) {
		console.log(e)
	}
}

start()