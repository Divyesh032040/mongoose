import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description : {
        type :  String ,
        required: true 
    },
    productImage:{
        typr:String,
    },
    price:{
        type:Number,
        default:0,
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Type.DocumentId(),
        ref:"Category",
        required:true,
    },
    owner:{
        type:mongoose.Schema.Type.DocumentId,
        ref:"User",
        required:true
    }

},{timestamps:true})



export const Product = new mongoose.model("Product",ProductSchema)