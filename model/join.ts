import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const JoinSchema = new Schema(
  {
    name: {type: String , required:true },
    email: {type: String , required:true },
    phone: {type: String , required:true },
    state : {type: String , required:true },
    clg : {type: String , required:true },
    desc : {type: String , required:true },
    
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Join", JoinSchema);
