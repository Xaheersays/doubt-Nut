
const { Tag } = require('../../Model/export');

const addTags = async (tags, qid) => {
    for (const element of tags) {
        const trimmedElement = element.trim().toLowerCase();
        try {
            await Tag.findOneAndUpdate(
                { name: trimmedElement },
                {
                    $inc: { count: 1 },
                    $addToSet: { questions: qid }, // Use $addToSet to add to array only if not present
                },
                { upsert: true }
            );
        } catch (error) {
            console.error(`Error processing tag '${element}':`, error);
        }
    }
};

module.exports = { addTags };


// const { Tag } = require('../../Model/export');

// const addTags = async (tags, qid) => {
//     for (const element of tags) {
//         const trimmedElement = element.trim().toLowerCase();
//         try {
//             const existingTag = await Tag.findOne({ name: trimmedElement });

//             if (!existingTag) {
//                 const newTag = new Tag({ name: trimmedElement, questions: [qid] });
//                 await newTag.save();
//             } else {
//                 if (!existingTag.questions) {
//                     existingTag.questions = [];
//                 }
//                 await Tag.findOneAndUpdate(
//                     { name: trimmedElement },
//                     { $inc: { count: 1 }, $push: { questions: qid } },
//                 );
//             }
//         } catch (error) {
//             console.error(`Error processing tag '${element}':`, error);
//         }
//     }
// };

// module.exports = { addTags };


// // const { Tag } = require('../../Model/export');

// // const addTags = async (tags, qid) => {
// //     for (const element of tags) {
// //         const trimmedElement = element.trim().toLowerCase();
// //         try {
// //             const existingTag = await Tag.findOne({ name: trimmedElement });

// //             if (!existingTag) {
// //                 // If the tag doesn't exist, create a new one with the 'questions' array
// //                 const newTag = new Tag({ name: trimmedElement, questions: [qid] });
// //                 await newTag.save();
// //             } else {
// //                 // If the tag exists, update count and add qid to 'questions' array
// //                 existingTag.count = (existingTag.count || 0) + 1;
// //                 existingTag.questions = [...new Set([...(existingTag.questions || []), qid])];
// //                 await existingTag.save();
// //             }
// //         } catch (error) {
// //             console.error(`Error processing tag '${element}':`, error);
// //         }
// //     }
// // };

// // module.exports = { addTags };

