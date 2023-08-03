module.exports=(data)=>{
let cart={}
cart.itemId=data.itemId;
cart.quantity=data.quantity;
cart.amount=data.amount;
cart.total=data.total;
cart.subTotal=data.subTotal;
cart.status=data.status;
cart.taxId=data.taxId;
cart.orderId=data.orderId;
cart.stage=data.stage;
cart.extraId=data.extraId;
cart.dateCreated=new Date().valueOf()
cart.dateUpdated=new Date().valueOf()
return cart;
}