const tax = require("../database/model/tax")

module.exports={
getTax:async(req,res)=>{
    try{
let allTax=await tax.find()
if(allTax.length>0){
    return res.send({status:1,message:"success",data:allTax})
}
else{
    return res.send({status:2,message:"data not found",data:[]})

}
    }
    catch(err){
        return res.send({status:3,message:"something went wrong",data:err})
    }
},
addtax:async(req,res)=>{
    let data=req.body
    try{
        let datas={}
        datas.name=data.name
        datas.taxAmount=data.amount
        datas.status=1
        datas.createdBy=req.userData.id;
        datas.updatedBy=req.userData.id;
        datas.dateCreated=new Date().valueOf();
        datas.dateUpdated=datas.dateCreated;
            let tax=await tax.create(datas)
            if(tax){
                return res.send({status:1,message:"success",data:tax})
            }
            else{
                return res.send({status:2,message:"something went wrong",data:[]})
            }

    }
    catch(err){
        return res.send({status:3,message:"something went wrong",err})
    }
},
editTax:async(req,res)=>{
    let data=req.body
    try{
        let datas={}
        if(data.name){
        datas.name=data.name
        }
        if(data.name){
            datas.taxAmount=data.amount
        }
        datas.updatedBy=req.userData.id;
        datas.dateUpdated=datas.dateCreated;
            let tax=await tax.findOneAndUpdate({ id }, { datas })
            if(tax){
                return res.send({status:1,message:"success",data:tax})
            }
            else{
                return res.send({status:2,message:"something went wrong",data:[]})
            }

    }
    catch(err){
        return res.send({status:3,message:"something went wrong",err})
    }
},
}