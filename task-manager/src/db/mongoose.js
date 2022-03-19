const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    // useCreateIndex: true
})

// const me = new User({
//     name: '     Kyunam',
//     password: '    password123',
//     email: 'MYEMAIL@MEAD.IO'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const myTask = new Task({
//     description: '    Do flip   '
// })

// myTask.save().then(() => {
//     console.log(myTask)
// }).catch((error) => {
//     console.log('Error!', error)
// })