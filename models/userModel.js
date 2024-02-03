

import mongoose from 'mongoose';


// define the User model schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,

  },
  phone:{
    type:String,
    required:true
  },
  address:{
    type:{},
    required:true
  },
  answer:{
    type:String,
    required:true
  },
  role:{
    type:Number,
    default: 0
  }


},{timestamps:true});
///when a user will be created time stamp will be added



export default mongoose.model('users', UserSchema);