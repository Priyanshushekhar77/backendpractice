import mongoose from "mongoose";

const productschema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,//url of cloudinary
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},
{timestamps:true})

export const Product=mongoose.model("Product",productschema)