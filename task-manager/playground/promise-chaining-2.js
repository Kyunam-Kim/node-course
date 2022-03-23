require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('622f9a47f897a350f4d8d1e1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) =>{
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('622f9a47f897a350f4d8d1e1').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
});