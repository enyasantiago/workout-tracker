const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: ()=>new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required:true
            },
            weights: {
                type: Number,
                required: false
            },
            reps: {
                type: Number,
                required: false
            },
            sets: {
                type: Number,
                required: false
            },
            distance: {
                type: Number,
                required: false
            }
            
        }
    ]
})

const Workout = mongoose.model("Workout", )

module.exports = Workout