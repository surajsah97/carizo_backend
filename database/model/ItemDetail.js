const mongoose = require("mongoose")
const uuid = require("uuid")
const itemDetail = mongoose.Schema({
    id: { type: String, required: true, default: uuid.v4() },
    name: { type: String, required: true },
    title:{type:String,required:true},
    discount:{type:Number},
    rating:{type:Number},
    isCashOnDelivary:{type:Boolean,required:true},
    returnPolicy:{type:Boolean,required:true},
    warantyPeriod:{type:String,required:true},
    ProductType:{type:String},
    status: { type: Number, required: true },
    count: { type: Number, required: true },
    images: { type: Array, required: true },
    fectures: { type: Object, required: true },
    desc: { type: String, required: true },
    size:{type:String},
    price:{type:String,required:true},
    color:{type:String},
    mappingItem:{type:Object},
    availablity: { type: String, required: true },
    itemId:{type:String,required:true},
    createdBy:{type:String,required:true},
    createdDate:{type:Number,required:true},
    updatedBy:{type:String,required:true},
    updatedDate:{type:Number,required:true},
})
module.exports = mongoose.model("iemDetail", itemDetail)