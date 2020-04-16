require('../src/db/mongoose')
const Task = require('../src/models/Task')

// Task.findByIdAndDelete('5e9892a266f235621840445b').then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })

const deleteTaskAndCount = async id => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e947822f9a3245cb8e6896b').then(count => {
    console.log(count)
}).catch(error => {
    console.log(error)
})
