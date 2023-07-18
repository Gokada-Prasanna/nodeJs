const path = require("path")

const filePath = "/Users/sh/Desktop/NodeJs/files/sample.txt"
// const filePath = "C:\Users\sh\Desktop\NodeJs\files\sample.txt"


// //directoryname

// console.log(path.dirname(filePath))
// console.log(__dirname)
// //basename 
// console.log(path.basename(filePath))
// console.log(__filename)

// //extension_name 
// console.log(path.extname(filePath))

// const sampleFile = "sample.txt"


// console.log(path.join(path.dirname(filePath)), sampleFile)

const fs = require("fs")

fs.readFile(filePath)

console.log(fs)