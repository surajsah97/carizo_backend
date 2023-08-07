const orderCartUpdate=(data,order,quantity)=>{
data.quantity=quantity;
data.subtotal=data.subtotal+data.price*quantity
data.total=data.subtotal+data.tax
if(data){
    order.subTotal=data.subTotal+order.subTotal
    order.total=data.total+order.total
    order.taxId=data.taxId
    order.updatedDate=new Date().valueOf()
}
}