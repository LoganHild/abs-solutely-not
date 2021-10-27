const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    string: {
        type: String,
        trim: true,
        required: "String is Required"
    },

    number: {
        type: Number,
        unique: true,
        required: true
    }
})