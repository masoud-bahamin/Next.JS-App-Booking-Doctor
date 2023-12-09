const mongoose = require("mongoose")
const User = require("@/models/user")

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
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref : "User"
    },


}, {
    timestamps: true
})

const commentModel = mongoose.models.Comment || mongoose.model("Comment", schema)

export default commentModel