import mongoose from "mongoose";

const productSchemas=new mongoose.Schema({

    productname:{
        type:String,
        required:true
    },
    quolity:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    proDate:{
        type:String,
        required:true
    },
    expDate:{
        type:String,
        required:true
    },
    descliption:{
        type:String,
        required:true
    },
    quantityAvailable:{
        type:Number,
        required:true
    },
    images:{
        type:Array,
        required:true
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0 
    },
    comments:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    },
    ],
    postAt:{
        type:Date,
        default:new Date(Date.now())
    }

})
productSchemas.pre(/^find/,function(next){
    this.populate({
        path:"comments",
        select:"names email comment postAt"
    })
    next()
})
const Product=mongoose.model("Product",productSchemas)
export default Product