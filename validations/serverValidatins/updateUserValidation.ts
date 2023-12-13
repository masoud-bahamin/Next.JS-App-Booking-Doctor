const validator = require("fastest-validator")

const v = new validator()

const schema = {
    location: { type: "string", min: 3, max: 50 },
    age: { type: "number", min: 3, max: 100 },
    bio: { type: "string", min: 3, max: 1000 },
    name: { type: "string", min: 3, max: 50 },
    phone: { type: "string", min: 9, max: 13 }
}

const updateUserValidator = v.compile(schema)

export default updateUserValidator