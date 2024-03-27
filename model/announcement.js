import mongoose from "mongoose";


const annunceSchemas = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    announcement:{
        type:String,
        required:true
    },
    postAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
const Announce = mongoose.model("Announce",annunceSchemas)
export default Announce