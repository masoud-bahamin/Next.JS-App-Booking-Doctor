const validator = require("fastest-validator")

const v = new validator;

const schema = {
    message: { type: "string", min: 1, max: 350 },
    username: { type: "string", min: 1, max: 35},
    doctorId: { type: "string"},
    rateNumber: { type: "number", min: 0, max: 5 },
}

const commentValidator = v.compile(schema)

export default commentValidator