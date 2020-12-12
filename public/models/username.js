const mongoose=require("mongoose")
const validator=require("validator")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
       // validate(value){
         //   if(validator.isEmail(value)){
           //     throw new Error("invalid email id")
           // }
       // }
    },
    phone:{
        type:Number,
        required:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

//We need a collection

const User =mongoose.model("USer",userSchema)
module.exports=User