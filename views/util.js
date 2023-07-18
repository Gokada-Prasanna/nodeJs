const util = require("util")

const name = "satya"
const age = 26

const message = util.format("My name is %s and my age is %s", name, age)

const obj = {name:"satya", age:26}
console.log(util.inspect(obj))

console.log(message)
// const util =  require('util')

// const name  = "chow";
// const age = 25;
// const message = util.format('My name is %s and i am %d' ,name,age) 

// console.log(message)



// const obj = {name:"chow",age:25}
// console.log(util.inspect(obj))


