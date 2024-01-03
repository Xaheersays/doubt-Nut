
const { z } = require("zod");

const userType = z.object({
  username: z.string(),
  password: z.string(),
}).refine(data => data.username && data.password, {
  message: "Username and password are required",
});

module.exports = { userType };

