

import mongoose from "mongoose";

const farmerSchemas = new mongoose.Schema({
    
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    phonenumber:{type:String,required:true},
    district:{type:String,required:true},
    sector:{type:String,required:true},
    sell:{type:String,required:true},
    village:{type:String,required:true},
    idPhotocopy:{type:String,required:true},
    landReport:{type:String,required:true},
    picture:{type:String,required:true},
    letter:{type:String,required:true},
    password:{type:String,required:true},
    confrimpawword:{type:String,required:true},
    role:{type:String,enum:"farmer",default:"farmer"},
    signedAt:{type:Date,default:new Date(Date.now())}

})
const Farmer = mongoose.model("Farmer",farmerSchemas)
export default Farmer