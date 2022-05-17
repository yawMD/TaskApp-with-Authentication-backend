//CRUD create read update and delete

const mongodb = require("mongodb")
const {ObjectID} = require("mongodb");
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "test-manager"

// Create db by inserting into collection

//insertOne for inserting one item into collection

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if(error){
//         return console.log("error in script")
//     }
//     const db = client.db(databaseName)
//
//     db.collection('users').insertOne({
//         name:"McDan",
//     },(error, result)=>{
//         if (error){
//             return console.log("Unable to insert")
//         }
//         console.log(result)
//     })
// })

//insert many

// MongoClient.connect(connectionURL, { useNewUrlParser: true },(error , client) =>{
//     if(error) {
//         return console.log("error creating database")
//     }
//     const db = client.db(databaseName)
//
//     db.collection('newTasks').insertMany([
//         {
//             task: 'code',
//             completed: false
//         },
//         {
//             task: 'basketball',
//             completed: false
//         },
//         {
//             task: 'sing',
//             completed: false
//         },
//         {
//             task: 'Read',
//             completed: true
//         },
//     ], (error,result) => {
//         if(error) {
//             return console.log("execution failed")
//         }
//         console.log(result.ops);
//     })
// })


// MongoClient.connect(connectionURL, { useNewUrlParser: true },(error , client) =>{
//     if(error) {
//         return console.log("error creating database")
//     }
//     const db = client.db(databaseName)
//
//     db.collection('newTasks').insertMany([
//         {
//             description: 'John',
//             age: '24'
//         },
//         {
//             name: 'Eben',
//             age: '23'
//         }
//     ], (error,result) => {
//         if(error) {
//             return console.log("execution failed")
//         }
//         console.log(result.ops);
//     })
// })


//finding or reading from database

// findOne to find just one item

// MongoClient.connect(connectionURL, { useNewUrlParser: true },(error , client) => {
//     if (error) {
//         return console.log("error creating database")
//     }
//     const db = client.db(databaseName)

    // db.collection('newTasks').findOne({_id: new ObjectID("62718b1017d5cb9604ba7ff6")}, (error, user) =>{
    //     if(error){
    //         return console.log("unable to find document")
    //     }
    //     console.log(user) // findOne returns one pieces of data
    // })

// find to read many
//     db.collection('newTasks').find({ completed: false }).toArray((error, users) =>{
//         console.log(users) //returns all data with age 22
//     })
// })

////////// UPDATE DATABASE INFO

/// UPDATE ONE

// MongoClient.connect(connectionURL, { useNewUrlParser: true },(error , client) => {
//     if (error) {
//         return console.log("error creating database")
//     }
//     const db = client.db(databaseName)
//
//      db.collection('users').updateOne({  //update a database
//         _id: new ObjectID("627152739fc612fd95291e44")
//     },{
//         $set:{
//             name:"Oscar"
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

///UPDATE MANY

// MongoClient.connect(connectionURL, { useNewUrlParser: true },(error , client) => {
//     if (error) {
//         return console.log("error creating database")
//     }
//     const db = client.db(databaseName)
//
//     db.collection('newTasks').updateMany({
//         completed: false
//     },{
//         $set:{
//             completed:true
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

//DELETE FROM COLLECTION

MongoClient.connect(connectionURL, {useNewUrlParser:true},(error , client)=>{
    if(error){
        return console.log("Unable to generate database")
    }
    const db = client.db(databaseName)
    db.collection('users').deleteOne({
        name : "Oscar"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})

