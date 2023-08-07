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
            let quantity=req.body.quantity;
            let orderId=req.body.orderId;
            let userData=req.body.user;
            if(!orderId){
                let custOrder=await Order.findOne({userId:req.body.user.id})
                if(!custOrder){
                    custOrder=addOrder(userData)
                }
            }
            if(!itemId){
                return res.send({status:2,message:"item id required"})
            }
            let cart=await Cart.find({itemId:itemId})
            if(cart){
                let order=await Order.find({id:cart.cartId})
                let cartOrder=orderCartUpdate(cart,order,quantity)

            }
            else{
            let ItemDetails=await ItemDetail.findOne({id:itemId})
            if(ItemDetails){
                let tax=await tax.findOne({id:ItemDetails.taxId})
                ItemDetail["taxAmount"]=tax.taxAmount
                ItemDetail["stage"]=1
                ItemDetail["user"]=req.body.user
                carts["user"]=req.body.user
                let carts=AddCart(ItemDetail)
                let cartAdded=await Cart.create(carts)
                let order=addOrder(carts)
                let orderAdded=await Order.create(order)
                if(orderAdded){
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
        }
        catch(err){
            return res.send({status:3,message:"something went wrong",err})

        }
    }
}