
import mongoose from "mongoose";


const messageSchemas=new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    sendAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const Contact=mongoose.model("Contact",messageSchemas)
export default Contact