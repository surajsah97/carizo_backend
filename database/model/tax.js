const mongoose = require("mongoose")
const uuid = require("uuid")
const tax = mongoose.Schema({
id:{type:String,required:true,default: uuid.v4(),primaryKey: true},
name:{type:String,required:true},
taxPrice:{type:Number,required:true},
status:{type:Number,required:true},
dateCreated:{type:Number,required:true},
dateUpdated:{type:Number,required:true}
})
module.exports = mongoose.model("tax", tax)