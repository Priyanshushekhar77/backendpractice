import mongoose from "mongoose";

const userschema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        enum:["seller","buyer"],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password must be reaquired"],
    },

},
{timestamps:true})

export const User=mongoose.model("User",userschema)