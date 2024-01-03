// const {mongoose} = require('./connectToDb')

const saveToDb = async(document)=>{
    try{
        await document.save()
        return {success:true,message:'data saved to db'}
    }
    catch{
        return {success:false,message:'data cant be saved to db'}
    }
    
}
module.exports = {saveToDb}
