const  { questionType } = require('../../Types/questionType')

const safeParseQuestion = (quest) =>{    
    const result = questionType.safeParse(quest)
    return result.success
}

module.exports = { safeParseQuestion }