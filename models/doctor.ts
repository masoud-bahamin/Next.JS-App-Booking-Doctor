const mongoose = require("mongoose")
const Comment = require("@/models/comment")
const Image = require("@/models/image")

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique : true ,
        index : true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique : true,
        index : true
    },

}, {
    timestamps: true
})

schema.virtual("comments" , {
    ref : "Comment",
    localField : "_id",
    foreignField : "doctorId"
})
schema.virtual("img" , {
    ref : "Image",
    localField : "_id",
    foreignField : "doctorId"
})

const doctorModel = mongoose.models.Doctor || mongoose.model("Doctor", schema)

export default doctorModel