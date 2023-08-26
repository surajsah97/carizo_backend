const Order = require("../database/model/Order");

const orderCartUpdate=async(allCart,custCart,custOrder)=>{
    allCart.map(el=>{
        custOrder.subTotal+=el.subTotal;
        custOrder.total+=el.total
        custOrder.tax+=el.tax
    })
    custOrder.updatedDate=new Date().valueOf();
    let AddOrder=await Order.create(custOrder)
    let AddCart=await custCart.create(custCart)
    if(AddCart&&AddOrder){
        custOrder.cart=allCart
        return custOrder
    }
// data.quantity=quantity;
// data.subtotal=data.subtotal+data.price*quantity
// data.total=data.subtotal+data.tax
// if(data){
//     order.subTotal=data.subTotal+order.subTotal
//     order.total=data.total+order.total
//     order.taxId=data.taxId
//     order.updatedDate=new Date().valueOf()
// }
}
module.exports={orderCartUpdate}