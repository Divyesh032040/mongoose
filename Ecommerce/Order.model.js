import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({
    productId:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const OrderSchema = mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type: mongoose.Schema.Type.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PENDING","PROCESSING","SHIPPED","DELIVERED",'CANCEL'],
        default:"PENDING",
        required:true
    }
},{timestamps:true});

export const Order = new mongoose.model("Order",OrderSchema);
