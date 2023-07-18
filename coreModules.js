const fs = require("node:fs")

fs.writeFileSync("./file1.txt", "Hello World", "utf-8")
fs.writeFileSync("./file1.txt", " Welcome", {flag:"a"}, "utf-8")
fs.writeFileSync("./file1.txt", "\nHow are you?", {flag:"a"}, "utf-8")

const buffData = fs.readFileSync("./file1.txt")
console.log(buffData.toString())

fs.readFile("./file1.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

fs.renameSync("./file1.txt", "./file2.txt")