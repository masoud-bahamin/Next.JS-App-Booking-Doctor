import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    doctorId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

export const bookingModel = mongoose.models.Booking || mongoose.model("Booking" , schema)