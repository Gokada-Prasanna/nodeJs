const error = new Error("Something went Wrong!")

// console.log(error.stack)
// console.log(error.message)

// throw new Error("I am error object")

const {CustomError} = require("./CustomError")
// throw new CustomError("This is a custom Error Object")


//handle the exception using try and catch 

// try{
//     doSomething()
// }
// catch(err){
//     console.log("Error Occurred")
//     console.log(err.message)
// }

function doSomething() {
    // const data = fetch("localhost:3000/api")
    // console.log("I am from the doSomething function")
    const data = "I am from the doSomething function"

    return data
}

//uncaught exception

// process.on("uncaughtException", (err) => {
//     console.log("There was an uncaught exception")
//     process.exit(1)
// })

doSomething()


//exception with promises 

// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve(doSomething())
//     }
//     else{
//         reject(doSomething())
//     }
// })

// promise.then(value => {
//     console.log(value)
// })
// .catch(err => {
//     console.log("error occurred")
// })

const someFunction = async () => {
    try{
        const data = await doSomething()
        console.log(data)
    }catch(err){
        throw CustomError(err.message)
    }
}

someFunction()