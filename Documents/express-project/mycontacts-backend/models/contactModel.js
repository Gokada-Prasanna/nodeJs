const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add the contact name"],
    },
    email:{
        type:String,
        required:[true, "Please add the contact email"]
    },
    phone:{
        type:String,
        requied:[true, "Please add the Contact number"]
    }
}, 
{
    timestamps:true,
})

module.exports = mongoose.model("Contact", contactSchema);