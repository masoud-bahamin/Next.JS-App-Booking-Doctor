const mongoose = require("mongoose")

export default function connectToDb() {
    if (mongoose.connections[0].readyState) {
        return false
    } else {
        mongoose.connect("mongodb+srv://bahaminwp:bahamin1364@bahamincluster.zht7zml.mongodb.net/Project-one")
        console.log("connect to Project-one DB");
    }
}