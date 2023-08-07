module.exports=(data)=>{
    let datas={}
    datas.name=data.name
    datas.status=1
    datas.subTotal=data.subTotal
    datas.total=data.total
    datas.tax=data.tax
    datas.taxId=data.taxId
    datas.userId=data.user.id
    datas.cartId=data.id
    datas.totalTax=data.totalTax
    datas.quantity=data.quantity
    datas.createdBy=data.user.id
    datas.createdDate=new Date().valueOf()
    datas.updatedBy=datas.createdBy
    datas.stage=1
    datas.updatedDate=new Date().valueOf()
    return datas
}