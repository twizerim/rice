
import mongoose from "mongoose";


const userchemas=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confrimpassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","farmer","admin"],
        default:"user"
    },
    signedAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const User=mongoose.model("User",userchemas)
export default User