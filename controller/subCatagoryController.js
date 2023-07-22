const subCatagory = require("../database/model/subCatagory");

module.exports={
    getSubCatagory:async(req,res)=>{
        try{
            let data=await subCatagory.find();
            if (data.length>0){
                return res.send({status:1,message:"success",data})
            }
            else{
                return res.send({status:2,message:"data not found",data:[]})
            }
        }
        catch(err){
            return res.send({status:3,message:"something went wrong"})
        }
    },
    getSubCatagoryByCatId:async(req,res)=>{
        try{
            let id=req.params.id
            let data=await subCatagory.find({id});
            if (data){
                return res.status(200).send({status:1,message:"success",data})
            }
            else{
                return res.send({status:2,message:"data not found",data:[]})
            }
        }
        catch(err){
            return res.send({status:3,message:"something went wrong"})
        }
    },

    editSubCatagory:async(req,res)=>{
        let id=req.params.id
        let dataForUpdate=req.body
        try{
            let datas={}
            let data=await subCatagory.findOne({id})
            if(dataForUpdate.name){
                datas.name=dataForUpdate.name
            }
            if(dataForUpdate.desc){
                datas.desc=dataForUpdate.desc
            }
            if(dataForUpdate.count){
                datas.count=dataForUpdate.count
                datas.availablity=datas.count>0?1:0
            }
            if(dataForUpdate.count){
            datas.count=dataForUpdate.count
            datas.availablity=dataForUpdate.count>0?1:0
            }
            if(dataForUpdate.price){
                datas.price=dataForUpdate.price
            }
            if(image.path){
                datas.image=image.path
            }
            
            datas.updatedBy=req.body.userData.userId
            
            datas.updatedDate=new Date().valueOf()
            let updateData=await Item.findOneAndUpdate({id},{datas})
            if(updateData){
                return res.send({status:1,message:"updated successfully",id})
            }
            else{
                return res.send({status:2,message:"no data found"})
            }
            
        }
        catch(err){
            return res.send({status:3,message:"something went wrong",err})
        }
    },
    addsubCatagory:async(req,res)=>{
        
        try{
            let image=req.file
            let data=req.body
            console.log(JSON.stringify(req.body,"==============",image));
            let datas={}
                if(!data.name){
                    return res.send({status:2,message:"name required"})
                }
                datas.name=data.name
                if(!data.count){
                    return res.send({status:2,message:"count required"})
                }
                datas.desc=data.desc?data.desc:""
                datas.count=data.count
                datas.availablity=data.count>0?1:0
                datas.status=1
                datas.image=image.path
                datas.createdBy=req.userData.userId
                datas.updatedBy=req.userData.userId
                datas.price=data.price
                // datas.parentId=data.parentId
                datas.catagoryId=data.catagoryId
                datas.superCatagoryId=data.superCatagoryId
                // datas.productDetail=data.productDetail
                datas.createdDate=new Date().valueOf()
                datas.updatedDate=datas.createdDate
                let uploadedData=await subCatagory.create(datas)

                if(uploadedData){
                    return res.send({status:1,message:"succesfully created",id})
                }
                else{
                    return res.send({status:2,message:"something went wrong",id:""})

                }

        }
        catch(err){
            return res.send({status:3,message:"something went wrong",err})
        }
    },

    removeSubCatagory:async(req,res)=>{
        let id = req.params.id
        try {
            let removeData= await subCatagory.remove({ id })
            if(removeData){
                return res.send({status:1,message:"updated successfully",id})
            }
            else{   
                return res.send({status:2,message:"something went wrong"})
            }

        }
        catch (err) {
            return res.send({status:2,message:"something went wrong",err})
        }
    }


}