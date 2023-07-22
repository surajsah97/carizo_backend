const mongoose = require("mongoose")
const uuid = require("uuid")
const employee = mongoose.Schema({
    id: { type: String, required: true, default: uuid.v4() },
    name: { type: String, required: true },
    status: { type: Number, required: true },
    contactNumber: { type: Number, required: true },
    image: { type: String, required: true },
    about: { type: String, required: true },
    emailId: { type: String, required: true },
    address1:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    country:{type:String,required:true},
    zip:{type:number,required:true},
    createdBy:{type:String,required:true},
    role:{type:Number,require:true},
    createdDate:{type:Number,required:true},
    updatedBy:{type:String,required:true},
    updatedDate:{type:Number,required:true},
    password:{type:String,required:true}
})

module.exports = mongoose.model("employee", employee)