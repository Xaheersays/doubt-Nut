const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const userRouter = require("./Routes/userRoute");
app.use("/user", userRouter)

// app.use(bodyParser)


app.get('/',(req,res)=>res.send('ok'))
app.listen(3000)