const mongoose = require("mongoose")
const User = require("@/models/user")
const Doctor = require("@/models/doctor")

const schema = mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    rateNumber: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    doctorId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref : "Doctor"
    },


}, {
    timestamps: true
})

const commentModel = mongoose.models.Comment || mongoose.model("Comment", schema)

export default commentModel