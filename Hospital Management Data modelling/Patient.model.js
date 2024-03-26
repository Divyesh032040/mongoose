import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagnosedWith:{
        type:String,
        required:true,
    },
    BloodGroup:{
        type:String,
        enum:[ 'A+','A-','B+','B-','AB+','AB-','O+','O-'],
        required:true,
    },
    AdamiteIn:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Hospital"
    },
    gender:{
        type:String,
        ref:["Male","female","Other"],
    },
    address:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
        default:"general"
    },
    ID:{
        type:String,
        required:true,
    },
    Condition:{
        type:String,
        enum:["normal","serious"]
    } 
},{timestamps:true});

export const Patient = mongoose.model("Patient",PatientSchema);