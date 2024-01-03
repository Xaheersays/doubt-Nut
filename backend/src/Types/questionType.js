const z = require('zod')
const questionType = z.object({
    title:z.string(),
    content:z.string(),
    images:z.array(),
    upvotes:z.number(),
    downvotes:z.number(),
    tags:z.array()
})

module.exports = {questionType}