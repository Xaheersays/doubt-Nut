const z = require('zod');

const questionType = z.object({
    title: z.string(),
    content: z.string(),
    images: z.array(z.string()), 
    tags: z.array(z.string()),   
    upvotes: z.array(z.unknown()), 
    downvotes: z.array(z.unknown()), 
    createdAt: z.date(),
    answers: z.array(z.unknown()), 
    lastUpdated: z.date(),
    status: z.string(), 
});

module.exports = { questionType };
