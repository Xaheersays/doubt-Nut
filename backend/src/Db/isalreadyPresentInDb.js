const  {User} = require('../Model/export')

const isalreadyPresentInDb = async(collection,conditions) =>{
    console.log(collection,conditions)
    const doc = await collection.findOne(conditions)
    if (doc){
        //user present
        return doc
    }
    //not present
    return false
    
}

module.exports = {isalreadyPresentInDb}