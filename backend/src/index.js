const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require("./Routes/user");
app.use("/user", userRouter)
app.use(express.json())
app.use(bodyParser)


app.get('/',(req,res)=>res.send('ok'))
app.listen(3000)