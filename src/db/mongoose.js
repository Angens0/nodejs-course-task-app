const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
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

const me = new User({
    name: '    Kamil    ',
    email: 'MYEMAIL@MEAD.IO     '
})

me.save().then(result => {
    console.log(result)
}).catch(error => {
    console.log('Error!', error)
})

// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })

// task.save().then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })

