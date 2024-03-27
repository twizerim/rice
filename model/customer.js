import mongoose from "mongoose";

const customerSchemas=new mongoose.Schema({

    phone:{
        type:Number,
        required:true
    },
    names:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    shopAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const Custommer = mongoose .model("Custommer",customerSchemas)
export default Custommer