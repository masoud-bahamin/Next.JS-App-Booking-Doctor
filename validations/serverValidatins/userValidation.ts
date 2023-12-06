const validator = require("fastest-validator")

const v = new validator;

const schema = {
    email: { type: "string", min: 5, max: 50 },
    password: { type: "string", min: 5, max: 50 },
    username: { type: "string", min: 5, max: 50 },
}

const userValidator = v.compile(schema)

export default userValidator