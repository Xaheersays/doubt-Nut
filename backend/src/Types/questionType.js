const z = require('zod')
const questionType = z.object({
    title:z.string().required(),
    content:z.string().required(),
    images:z.array(z.string()),
    upvotes:z.number(),
    downvotes:z.number()
})

module.exports = {questionType}