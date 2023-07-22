const product=require("../database/model/superCatagory")
const uuid=require("uuid")
module.exports={
    getProduct:async(req,res)=>{
        try{
            let data=await product.find();
            console.log("=-=-=-=-=-=-");
            if (data.length>0){
                console.log("qwertyuiop[");
                return res.send({status:1,message:"success",data})
            }
            else{
                return res.send({status:2,message:"data not found",data})

            }

        }
        catch(err){
            return res.send({status:3,message:"something went wrong",err})


        }
    },
    addProduct:async(req,res)=>{
        let image=req.file
        console.log({image});
        let data=req.body
        // console.log(JSON.stringify(req.body,"=============="));
        try{
        let datas={}
            if(!data.name){
                
                return res.send({status:2,message:"name required"})
            }
            datas.name=data.name
            if(!data.count){
                return res.send({status:2,message:"count required"})
            }
            // console.log(req.userData,"-ssssss-=-=-=-=-=-=-=-=");
            datas.count=data.count
            datas.availablity=data.count>0?1:0
            datas.status=1
            datas.image=image.path
            datas.desc=req.body.desc
            datas.createdBy=req.userData.userId
            datas.updatedBy=req.userData.userId
            datas.createdDate=new Date().valueOf()
            datas.updatedDate=datas.createdDate
            let uploadedData=await product.create(datas)
            if(uploadedData){
                return res.send({status:1,message:"success",data:datas})
            }



        }
        catch(err){
            console.log({err});
            return res.send({status:3,message:"something went wrong",err})

            
        }
    },
    editProduct:async(req,res)=>{
        let id=req.params.id
        let dataForUpdate=req.body
        try{
            let datas={}
            let data=await product.findOne({id})
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
            let updateData=await product.findOneAndUpdate({id},{datas})
            if(updateData){
                return res.send({status:1,message:"updated successfully",id})
            }
        }

        catch(err){
            
        }
    },
    deleteProduct:async(req,res)=>{
        try{

        }
        catch(err){
            
        }
    
    }
}