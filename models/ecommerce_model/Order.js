import mongoose from "mongoose";

//minimodels for which product and how much product to define structure of model
const orderItemSchema=new mongoose.Schema({
  productid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
  },
  quantity:{
    type:Number,
    required:true,
  }
})



const orderschema=new mongoose.Schema({

    orderprice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderitems:{
        type:[orderItemSchema]//array of multiple products
        //use multiple product with multiple quantity
        //can be done using sreparate schema
    },
    address:[//contains fully address details 
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address",//make separate schema of address

    }],
    //status of order
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],//choices
        default:"PENDING",
    }

},
{timestamps:true})

export const Order=mongoose.model("Order",orderschema)