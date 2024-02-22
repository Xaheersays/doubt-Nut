const { fetchDocumentFromDb } = require("../../Db/fetchDocumentFromDb")
const { User, Question } = require("../../Model/export")
const { getDocFromToken } = require("./getDocFromToken")



const getUserFeed  =async (token)=>{
    const userDoc = await getDocFromToken(token);

    if (!userDoc) {
    return ['no feed'];
    }

    const followers = userDoc.followers;
    const following = userDoc.following;

    const feed = [];
    for (const uid of followers) {
        const user = await fetchDocumentFromDb(User, { _id: uid });
        const askedQs = user ? user.askedQuestions || [] : [];
        for (const qid of askedQs) {
            const question = await fetchDocumentFromDb(Question, { _id: qid });
            if (question){
                const upvoteCount = question.upvotes.length;
                const downvoteCount = question.downvotes.length;
                const temp = { qid:question._id,title:question.title,content:question.content.substr(0,20),images:question.images,tags:question.tags,upvoteCount,downvoteCount,authorId:question.authorId,createdAt:question.createdAt,updatedAt:question.updatedAt } 
                feed.push(temp) 
            }
        }
    }
    for (const uid of following) {
        const user = await fetchDocumentFromDb(User, { _id: uid });
        const askedQs = user ? user.askedQuestions || [] : [];
        for (const qid of askedQs) {
            const question = await fetchDocumentFromDb(Question, { _id: qid });
            if (question){
                const upvoteCount = question.upvotes.length;
                const downvoteCount = question.downvotes.length;
                const temp = { qid:question._id,title:question.title,content:question.content.substr(0,20),images:question.images,tags:question.tags,upvoteCount,downvoteCount,authorId:question.authorId,createdAt:question.createdAt,updatedAt:question.updatedAt } 
                feed.push(temp) 
            }
        }
    }
    return feed;


}


module.exports={getUserFeed}