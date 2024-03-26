import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
        name:{
            type: string ,
            required:true,
        }
},{timestamps:true});

export const Category = mongoose.model("category" , CategorySchema )