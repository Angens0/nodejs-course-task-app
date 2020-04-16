require('../src/db/mongoose')
const User = require('../src/models/User')

User.findByIdAndUpdate('5e98736f04fe0a6d1c6c3723', { age: 1 }).then(user => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})