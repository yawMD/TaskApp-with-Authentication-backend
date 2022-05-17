const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=>{
//         // res.status(505).send("site under maintenance")
//     next()
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require("jsonwebtoken");
//
// const myFunction = async ()=>{
//     const token = jwt.sign({_id:"abc123"},'thisismynewcourse', {expiresIn: "7days" })
//     console.log(token)
//
//     const data = jwt.verify(token,"thisismynewcourse")
//     console.log(data)
// }
// myFunction()



//
// const bcrypt = require('bcryptjs');
//
// const myFunction = async()=>{
//     const password = "red12345" //this is the password the user sends
//     const hashedPassword = await bcrypt.hash(password, 8) //this is what would end up storing instead of the plain password stored by the user
//
//     //nb hashing algorithms are not reversible .........encryption algorithms are reversible
//
//     console.log(password)
//     console.log(hashedPassword)
//
//     const isMatch = await bcrypt.compare("red12345",hashedPassword)
//     console.log(isMatch)
// }
//
// myFunction()