const {mongoose, model} = require('mongoose')
const validator = require("validator")
const User = require("./user")


const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required:true,
        trim: true,
        validator(value){
        if(validator.isDecimal(value)) {
            throw new Error("task shouldn't be numbers")
        }
}
    },
    completed: {
        type:"boolean",
        default: false
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    }
},{
    timestamps: true,
})

const task = mongoose.model('task',taskSchema)

module.exports = task
