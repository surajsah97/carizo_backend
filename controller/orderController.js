const Cart = require("../database/model/Cart");
const Item = require("../database/model/Item");
const ItemDetail = require("../database/model/ItemDetail");
const Order = require("../database/model/Order");
const tax = require("../database/model/tax");
const AddCart = require("../helper/AddCart");
const addOrder = require("../helper/addOrder");
let common=require("../helper/commonFunction")

module.exports = {
  getOrder: async (req, res) => {
    try {
      let order = await Cart.find({ cartStatus: 1 });
      if (order.length > 0) {
        return res.send({ status: 1, message: "success", data: order });
      } else {
        return res.send({
          status: 2,
          message: "something went wrong",
          data: []
        });
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong", data: [] });
    }
  },
  editOrder: async (req, res) => {
    try {
    } catch (err) {}
  },
  deleteOrder: async (req, res) => {
    try {
    } catch (err) {}
  },
  addCart: async (req, res) => {
    try {
      let itemId = req.body.itemId;
      let quantity = req.body.quantity;
      let cartId = req.body.cartId;
      let orderId = req.body.orderId;
      let userData = req.body.user;
      let custCart, custOrder, itemData;
      if (!itemId && !cartId) {
        return res.send({ status: 2, message: "item id required" });
      }
      if (itemId) {
        itemData = await Item.find({ itemId });
      }


      if (!orderId) {
        custOrder = await Order.findOne({ userId: req.body.user.id, stage: 1 });
        if (!custOrder) {
          custOrder = addOrder(userData);
        }
        if (cartId) {
          custCart = await Cart.find({ cartId, status: 1 });
        } else {
          custCart = await Cart.find({ itemId, status: 1 });
        }
        if (!custCart || !(custCart.length > 0)) {
          custCart = AddCart(itemData);
        }
        let allCart=await Cart.find({orderId:custOrder.orderId})
        
        let orderCalculation = common.orderCartUpdate(allCart,custCart,custOrder);
        if(orderCalculation){
            res.send({status:1,message:"success",data:orderCalculation})
        }
      } else {
        // if(!cartId){
        //     //  custCart=await Cart.findOne({cartId});
        //     // if(custCart){
        //     //    custCart=await Cart.findOne({itemId,stage:1});
        //     // }
        //     // else{
        // }
      }
      let cart = await Cart.find({ userId: req.body.user.id, stage: 1 });
      if (cart) {
        let order = await Order.find({ id: cart.cartId });

        let cartOrder = orderCartUpdate(cart, order, quantity);
      } else {
        let ItemDetails = await ItemDetail.findOne({ id: itemId });
        if (ItemDetails) {
          let tax = await tax.findOne({ id: ItemDetails.taxId });
          ItemDetail["taxAmount"] = tax.taxAmount;
          ItemDetail["stage"] = 1;
          ItemDetail["user"] = req.body.user;
          carts["user"] = req.body.user;
          let carts = AddCart(ItemDetail);
          let cartAdded = await Cart.create(carts);
          let order = addOrder(carts);
          let orderAdded = await Order.create(order);
          if (orderAdded) {
            return res.send({ status: 1, message: "success", data: cartAdded });
          } else {
            return res.send({
              status: 2,
              message: "something went wrong",
              data: []
            });
          }
        } else {
          return res.send({
            status: 2,
            message: "something went wrong",
            data: []
          });
        }
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong", err });
    }
  }
};
