import mongoose from 'mongoose'

const Medical_RecordSchema = new mongoose.Schema({

},{timestamps:true});

export const Medical_Record = mongoose.model("Medical_Record",Medical_RecordSchema);