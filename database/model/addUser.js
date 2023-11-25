const mongoose = require("mongoose");
const uuid = require("uuid");
const catagory = mongoose.Schema({
    id:{type:String},
    responnse:{type:String}

})
module.exports = mongoose.model("addUser",catagory );
