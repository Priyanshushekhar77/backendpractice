import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    diagonsedWith:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"medicalrecord",
    },
    
    addressline1:{
        type:String,
        required:true,
    },
    addressline2:{
        type:String,
        
    },
    age:{
        type:Number,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true,
        enum:["A+","B"]//etc
    },
    gender:{
        type:String,
        enum:["M","F","O"],
    },
    admittedAT:[{
        type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",//make separate schema of address
    }]




},{
    timestamps:true
});

export const Patient=mongoose.model("Patient",patientSchema);