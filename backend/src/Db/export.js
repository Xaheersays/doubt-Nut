const {saveToDb} =require('./saveToDb')
const { isalreadyPresentInDb } =require('./isalreadyPresentInDb')
const {fetchDocumentFromDb} = require('./fetchDocumentFromDb')
const {addToSet} = require('./addToSetDb')
const {pullFromArray} = require('./pullFromArrayDb')
const { deleteDocFromDb } = require('./deleteDocFromDb')
module.exports = {saveToDb,isalreadyPresentInDb,fetchDocumentFromDb,addToSet,pullFromArray,deleteDocFromDb} 