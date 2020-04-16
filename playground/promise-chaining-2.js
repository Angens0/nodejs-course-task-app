require('../src/db/mongoose')
const Task = require('../src/models/Task')

Task.findByIdAndDelete('5e9892a266f235621840445b').then(task => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})