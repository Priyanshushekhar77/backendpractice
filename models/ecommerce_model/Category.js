import mongoose from "mongoose";

const categoryschema=new mongoose.Schema({


    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },

},
{timestamps:true})

export const Category=mongoose.model("Category",categoryschema)
//mongoose store in plural lowercase forms.