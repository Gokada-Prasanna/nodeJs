const fs = require("fs")

fs.mkdir("./mockTextFolder", {recursive: true}, (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Directory created")
    }
})

fs.writeFile("./mockTextFolder/mockText1.txt", "hello world", "utf-8", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Data entered")
    }
})

fs.appendFile("./mockTextFolder/mockText1.txt", "prasanna", "utf-8", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file updated")
    }
})

// fs.writeFile()

// fs.writeFile("./mockTextFolder/mockText1.txt", "Prasanna", {flag:"a"},  (err) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file updated")
//     }
// })

fs.unlink("./mockTextFolder/mockText1.txt", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file is deleted")
    }
})