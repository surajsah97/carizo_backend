module.exports=(data)=>{
    let datas={}

    datas.status=1
    datas.subTotal=0
    datas.total=0
    datas.totalTax=0
    datas.userId=data.id
    datas.cartId=[]
    datas.quantity=0
    datas.createdBy=data.id
    datas.createdDate=new Date().valueOf()
    datas.updatedBy=datas.createdBy
    datas.stage=1
    datas.updatedDate=new Date().valueOf()
    return datas
}