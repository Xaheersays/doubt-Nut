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
            question ?  feed.push(question) : ''
        }
    }
    for (const uid of following) {
        const user = await fetchDocumentFromDb(User, { _id: uid });
        const askedQs = user ? user.askedQuestions || [] : [];
        for (const qid of askedQs) {
            const question = await fetchDocumentFromDb(Question, { _id: qid });
            question ?  feed.push(question) : ''

        }
    }
    console.log(2, 'done ji flwin');

    return feed;


}


module.exports={getUserFeed}