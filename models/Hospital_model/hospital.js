import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true,
    },
    address:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address",//make separate schema of address
        }
    ],
   

},{
    timestamps:true
});

export const Hospital=mongoose.model("Hospital",hospitalSchema);