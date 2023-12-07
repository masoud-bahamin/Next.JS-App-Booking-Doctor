const mongoose = require("mongoose")
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
    role : {
        type : String ,
        enum : ["USER" , "DOCTOR" , "ADMIN"],
        default : "USER"
    }


}, {
    timestamps: true
})

schema.virtual("img" , {
    ref : "Image" ,
    localField : "_id",
    foreignField : "userId"
})

const userModel = mongoose.models.User || mongoose.model("User", schema)

export default userModel