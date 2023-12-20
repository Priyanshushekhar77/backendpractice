import mongoose from "mongoose";


//minimodels->hospital workingg hours
const hospitalDutySchema=new mongoose.Schema({
    hospitalId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital",
    },
    workinghourduration:{
      type:Number,
      required:true,
    }
  })

const doctorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    },
    experienced:{
        type:String,
        default:0,
    },
    qualifiaction:{
        type:String,
        required:true,
    },
    workedIN:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    }
],
workinghour:{
    type:[hospitalDutySchema] //can be done using sreparate schema
}
},{
    timestamps:true
});

export const Doctor=mongoose.model("Doctor",doctorSchema);