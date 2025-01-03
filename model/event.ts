import { Types } from "mongoose";
import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const EventSchema = new Schema(
  {
    name: {type: String , required:true , unique:true},
    date: {type: String , required:true},
    venue: {type: String , required:true },
    imgurl: {type: String , required:true },
    link: {type: String , required:true},
    
  },
  { timestamps: true }
); //timestamp true krn se created at , updated at , etc functionalities kaam krn lgti h

mongoose.models = {}; //isk bina product cant be overwrite ka error aa jyega
export default mongoose.model("Event", EventSchema);
