const  { questionType } = require('../../Types/questionType')

const safeParseQuestion = (quest) =>{    
    const result = questionType.safeParse(quest)
    console.log(result.error)
    return result.success
}

module.exports = { safeParseQuestion }