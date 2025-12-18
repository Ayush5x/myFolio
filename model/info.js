const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  name:{
    type: String,
    required: true
  } ,
   email: {
    type: String,
    required: true,
    lowercase: true,
   
  },
  message: {
    type: String,
    required: true,
    maxlength: 500
  }
}); 

module.exports = mongoose.model("Info", infoSchema);
