// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

// const { MongoClient, ObjectID, ObjectId } = require('mongodb')

// const connectionURL ='mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
    
//     const db = client.db(databaseName)

//     db.collection('tasks').deleteOne({ 
//         description: 'Clean the house' })
//     .then((result) => {
//         console.log(result)
//     }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('tasks').updateMany({ 
    //     completed : false
    // }, { 
    //     $set: { 
    //         completed: true 
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId('6224eb26cf546b65cf633f43')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').insertOne({
    //     name: 'Kyunam',
    //     age: 25
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops)
    // })
// })