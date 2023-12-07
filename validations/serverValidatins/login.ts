const validator = require("fastest-validator")

const v = new validator()

const schema = {
    email: { type: "string", min: 5, max: 50 },
    password: { type: "string", min: 5, max: 50 },
}

const loginValidator = v.compile(schema)

export default loginValidator