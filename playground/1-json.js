const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// bookJSON is a string, it is not an Object

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)


// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const parsedData = JSON.parse(dataJSON)
parsedData.name = 'Kyunam'
parsedData.age = 25
const changedData = JSON.stringify(parsedData)
fs.writeFileSync('1-json.json', changedData)

console.log(changedData)


