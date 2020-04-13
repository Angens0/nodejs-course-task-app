const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

// const me = new User({
//     name: 'Kamil',
//     age: 25
// })

// me.save().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log('Error!', error)
// })