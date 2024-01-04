const {saveToDb} =require('./saveToDb')
const { isalreadyPresentInDb } =require('./isalreadyPresentInDb')
const {fetchDocumentFromDb} = require('./fetchDocumentFromDb')
module.exports = {saveToDb,isalreadyPresentInDb,fetchDocumentFromDb} 