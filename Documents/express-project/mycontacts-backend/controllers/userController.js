const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
     const {username, email, password} = req.body;
     if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory!")
     }

     const userAvailable = await User.findOne({email})
     if(userAvailable){
        res.status(400);
        throw new Error("User already registered!")
     }


    //Hash password 
     const hashedPassword = await bcrypt.hash(password, 10);
     console.log("Hashed Password", hashedPassword)
     const user = await User.create({
        username, email, password:hashedPassword
     })


    console.log("user has created successfully")
    res.json({message:"Register the user"})
})

const loginUser = asyncHandler(async (req, res) => {
    res.json({message:"Login the user"})
})

const currentUser = asyncHandler(async (req, res) => {
    res.json({message:"Current user"})
})

module.exports = {registerUser, loginUser, currentUser}