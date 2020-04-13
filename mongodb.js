const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID('5e937f68d80e894a10d9cd05') }, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectID('5e93813f90baff4a9c494269') }, (error, task) => {
        if(error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        if(error) {
            return console.log('Unable to fetch')
        }

        console.log(tasks)
    })
})