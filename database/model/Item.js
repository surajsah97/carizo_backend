const mongoose = require("mongoose")
const uuid = require("uuid")
const product = mongoose.Schema({
    id: { type: String, required: true, default: uuid.v4(),primaryKey: true, },
    name: { type: String, required: true },
    status: { type: Number, required: true },
    count: { type: Number, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    availablity: { type: String, required: true },
    parentId:{type:String,required:true},
    subCatagoryId:{type:String},
    price:{type:Number,required:true},
    rating:{type:String,required:true},
    superCatgoryId:{type:String,required:true},
    createdBy:{type:String,required:true},
    createdDate:{type:Number,required:true},
    brand:{type:Number,required:true},
    updatedBy:{type:String,required:true},
    updatedDate:{type:Number,required:true},
})
module.exports = mongoose.model("items", product)