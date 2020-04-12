const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const connection = MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if(error) return console.log('Unable to insert documents')

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'complete the NodeJS course',
            completed: false
        },
        {
            description: 'make the bed',
            completed: true
        },
        {
            description: 'have dinner',
            completed: true
        }
    ], (error, result) => {
        if(error) {
            return console.log('Unable to insert documents')
        }

        console.log(result.ops)
    })
})