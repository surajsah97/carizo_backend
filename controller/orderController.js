const Cart = require("../database/model/Cart")

module.exports={
    getOrder:async(req,res)=>{
        try{
            let order=await Cart.find({cartStatus:1})
            if(order.length>0){
                return res.send({status:1,message:"success",data:order})
            }
            else{
                return res.send({status:2,message:"something went wrong",data:[]})
            }
        }
        catch(err){
            return res.send({status:3,message:"something went wrong",data:[]})
        }
    },
    addOrder:async(req,res)=>{
        try{
            let data=req.body;
            if(!data.itemId){
                return res.send({status:2})
            }
        }
        catch(err){
            return res.send({status:2,message:"something went wrong",data:[]})
        }
    },
    editOrder:async(req,res)=>{
        try{

        }
        catch(err){
            
        }
    },
    deleteOrder:async(req,res)=>{
        try{

        }
        catch(err){
            
        }
    
    }
}