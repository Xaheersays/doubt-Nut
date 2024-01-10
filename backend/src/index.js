const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const userRouter = require("./Routes/userRoute");
app.use("/user", userRouter)
const {getTrendingTags} = require('./Util/export')

// app.use(bodyParser)



app.get('/',(req,res)=>res.send('ok'))

app.get('/tags/trending',async(req,res)=>{
    return res.send(await getTrendingTags(10))
})

app.get('/tags/:tag',async(req,res)=>{
    
})


app.listen(3000)