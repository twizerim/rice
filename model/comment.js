
import mongoose from "mongoose";

const commenySchemas = new mongoose.Schema({

    names:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    comment:{
         type:String,
         required:true
    },
    postAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
const Comment = mongoose.model("Comment",commenySchemas)
export default Comment