const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

const newInfo = {
    name: "Rei",
    planet: "Earth",
    age: 29
}

// const newInfoJSON = JSON.stringify(newInfo)
// fs.writeFileSync('1-json.json', newInfoJSON)
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

const dataBuffer = fs.readFileSync('1-json.json') //return bits and bytes
const dataJSON = dataBuffer.toString() //converts to string
const data = JSON.parse(dataJSON) //parses JSON to js object
console.log(data)