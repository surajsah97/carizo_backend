const Cart = require("../database/model/Cart")
const Item = require("../database/model/Item")
const ItemDetail = require("../database/model/ItemDetail")
const Order = require("../database/model/Order")
const tax = require("../database/model/tax")
const AddCart = require("../helper/AddCart")

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
    
    },
    addCart:async(req,res)=>{
        try{
            let itemId=req.body.itemId;
            if(!itemId){
                return res.send({status:2,message:"item id required"})
            }
            let ItemDetails=await ItemDetail.findOne({id:itemId})
            if(ItemDetails){
                let tax=await tax.findOne({id:ItemDetails.taxId})
                ItemDetail["taxAmount"]=tax.taxAmount
                ItemDetail["stage"]=1
                ItemDetail["user"]=req.body.user
                let cartAdded=await Cart.create(carts)
                carts["user"]=req.body.user
                let carts=AddCart(ItemDetail)
                let order=addOrder(carts)
                let orderAdded=await Order.create(order)
                if(cartAdded){
                    return res.send({status:1,message:"success",data:cartAdded})
                }
                else{
                    return res.send({status:2,message:"something went wrong",data:[]})
                }
            }
            else{
                return res.send({status:2,message:"something went wrong",data:[]})
            }
        }
        catch(err){
            return res.send({status:3,message:"something went wrong",err})

        }
    }
}