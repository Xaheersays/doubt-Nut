const z = require('zod');

const commentType = z.object({
    title: z.string(),
    content: z.string(),
    images: z.array(z.string()),   
    upvotes: z.array(z.unknown()), 
    downvotes: z.array(z.unknown()), 
    createdAt: z.date(),
    replies: z.array(z.unknown()), 
    lastUpdated: z.date(),
    authorId:z.unknown()
});

module.exports = { commentType };
