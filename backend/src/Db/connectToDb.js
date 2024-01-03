    const mongoose = require('mongoose')
    mongoose.connect('mongodb+srv://shzaheer514:zaheer514@cluster0.jgq64hk.mongodb.net/DoubtNut', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('connected successfully')).catch(()=>console.log('not connected'))

    module.exports= {mongoose}