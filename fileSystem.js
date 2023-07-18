const fs = require("node:fs");

console.log("First")
const fileContents = fs.readFileSync("./file.txt", "utf-8")

console.log(fileContents)


fs.writeFileSync("./greet.txt", "Hello world")

console.log("Second")
fs.readFile("./file.txt", "utf-8", (err, data) => {
if(err){
    console.log(err)
}
else{
    console.log(data)
}
})


fs.writeFile("./greet.txt", "Hello babji", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("File Written")
    }
})

fs.writeFile("./greet.txt", " Hello World", {flag:"a"}, (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("File is updated")
    }
})

// fs.appendFile("./greet.txt", "\nHello world", (err) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File is updated")
//     }
// })
console.log("Third")



