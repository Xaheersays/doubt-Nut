const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const userRouter = require("./Routes/userRoute");
app.use("/user", userRouter)

const questionRouter = require('./Routes/questionRoute')
app.use("/question",questionRouter)

const adminRouter = require('./Routes/adminRoute')
app.use('/admin',adminRouter)
const {getTrendingTags,getFeedViaTag} = require('./Util/export')

// app.use(bodyParser)



app.get('/',(req,res)=>res.send('ok'))
// gettop10 tags 
app.get('/tags/trending',async(req,res)=>{
    return res.send(await getTrendingTags(10))
})

app.get('/tags/:tag',async(req,res)=>{
    const data = await getFeedViaTag(req.params.tag)
    return res.send(data)
})


app.listen(3000)