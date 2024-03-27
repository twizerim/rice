import mongoose from "mongoose";


const memberproduction =new mongoose.Schema({
    productionName:{
        type:String,
        required:true
    },
    quontity:{
        type:Number,
        required:true
    },
})
const Productmember = mongoose.model("Productmember",memberproduction)
export default Productmember