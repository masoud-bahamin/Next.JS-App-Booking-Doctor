const mongoose = require("mongoose")
const Image = require("@/models/image")
const Comment = require("@/models/comment")

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
    } ,
    name : {
        type : String ,
        default : "Name"
    } ,
    bio : {
        type : String ,
        default : "Bio"
    } ,
    age : {
        type : Number ,
        default : 18
    } ,
    speciality : {
        type : String ,
        default : "Dentist"
    } ,
    location : {
        type : String ,
        default : "USA"
    } ,
    phone : {
        type : String ,
        default : "No Phone Number"
    } ,
    rezerved : {
        type : [],
        default : []
    }


}, {
    timestamps: true
})

schema.virtual("img" , {
    ref : "Image" ,
    localField : "_id",
    foreignField : "userId"
})

schema.virtual("comments",{
    ref : "Comment",
    localField : "_id",
    foreignField : "userId"
})

const userModel = mongoose.models.User || mongoose.model("User", schema)

export default userModel