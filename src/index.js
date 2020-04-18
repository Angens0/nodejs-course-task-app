const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

const Task = require('./models/Task')
const User = require('./models/User')

const main = async () => {
    // const task = await Task.findById('5e9af3cd61488a2178d45dd3')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5e9af209d9aad1530c0ad517')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
