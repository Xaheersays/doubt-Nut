const {fetchDocumentFromDb} = require('../../Db/export')
const {User,Question,Comment} =  require('../../Model/export')

const task = async (questions, answers, askedQuestions, answeredQuestions) => {
    try {
        for (const qid of askedQuestions) {
            const qobj = await Question.findOne(
                { _id: qid },
                { title: 1, upvotes: 1, downvotes: 1, createdAt: 1, updatedAt: 1, content: 1 }
            );

            if (qobj) {
                qobj.content = qobj.content.substring(0, 10);
                questions.push(qobj);
            }
        }

        for (const cmtid of answeredQuestions) {
            const cobj = await Comment.findOne(
                { _id: cmtid },
                { title: 1, upvotes: 1, downvotes: 1, createdAt: 1, updatedAt: 1, content: 1 }
            );

            if (cobj) {
                cobj.content = cobj.content.substring(0, 10);
                answers.push(cobj);
            }
        }
    } catch (err) {
        console.error(err);
        return;
    }
};


const getBasicInfo = async(username,password)=>{
    const doc = await fetchDocumentFromDb(User,{username})
    if (!doc){
        return {success:false,message:'database internal errors'}
    }
    if (password===doc.password){
        const {pfp,followers,following,askedQuestions,answeredQuestions,drafts} = doc
        const questions = [];
        const answers = [];
        const draftsArr = [];
        await task(questions,answers,askedQuestions,answeredQuestions)
        await task(draftsArr,[],drafts,[])
        return {pfp,followers,following,questions,answers,drafts:draftsArr}
    } 
    else{
        const  {pfp,followers,following,askedQuestions,answeredQuestions} = doc
        const questions = [];
        const answers = [];
        await task(questions,answers,askedQuestions,answeredQuestions)
        return {pfp,followers,following,askedQuestions,askedQuestions}
    }

}
module.exports = {getBasicInfo}