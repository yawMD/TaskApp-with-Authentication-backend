const mongoose = require('mongoose')
// const validator = require("validator")
//
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
})


// const me = new task({
//     task:"basketball",
//     completed: true
// })
//
// me.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })

////////////////////////////////////////////////////////////////////////////////


// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type:String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validator(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email is invalid")
//             }
//         }
//     },
//     password:{
//       type: String,
//       required: true,
//         minlength: 6,
//         validator(value){
//           if(!validator.isStrongPassword(value)){
//               throw new Error("A strong password is required")
//           }
//         }
//     },
//     age: {
//         type: Number,
//         validate(value){
//             if(value<0){
//                 throw new Error("Age entered must be positive")
//             }
//         }
//     }
// })

// const me = new User({
//     name: 'JOE',
//     email: 'joe@gmail.com',
//     password: "2222222",
//     age: 12
// })
//
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })



