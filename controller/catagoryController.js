const catagory = require("../database/model/catagory");
const addUser=require("../database/model/addUser");

module.exports={
    getCatagory:async(req,res)=>{
        try{
            let data=await catagory.find();
    if (data.length>0){
        return res.send({status:1,message:"success",data})
    }
    else{
        return res.send({status:2,message:"data not found",data:[]})
    }

        }
        catch(err){
            return res.send({status:3,message:"something went wrong",data})
        }
    },
adddd:async(req,res)=>{
try{
    if(!req.body.id){
        return res.send({status:400,message:"id required"})
    }
    if(!req.body.userResp){
        return res.send({status:400,message:"user resp required"})

    }
    let data={
        userId:req.body.id,
        responnse:req.body.userResp
    }
    let uploadedData=await addUser.create(data)
                if(uploadedData){
                    return res.send({status:1,message:"success",data:datas})
                }
                else{
                    return res.send({status:1,message:"somethin went wrong",data:[]})

                }

}
catch(err){
    return res.send({status:400,message:"something went wrong"})
}
},
    getCatagoryById:async(req,res)=>{
try{
    let id=req.params.id
            let data=await catagory.find({id});
            if (data.length>0){
                dataIdList={}
                data.map(el=>{return el.id})

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

    addCatagory:async(req,res)=>{
        try{
            let image=req.file
            let data=req.body
            console.log("==============",image);
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
                datas.createdBy=req.userData.id
                datas.updatedBy=req.userData.id
                datas.price=data.price
                datas.parentId=data.parentId
                // datas.productDetail=data.productDetail
                datas.createdDate=new Date().valueOf()
                datas.updatedDate=datas.createdDate
                let uploadedData=await catagory.create(datas)
                if(uploadedData){
                    return res.send({status:1,message:"success",data:datas})
                }
                else{
                    return res.send({status:1,message:"somethin went wrong",data:[]})

                }
        }
        catch(err){
            console.log({err});
            return res.send({status:3,message:"something went wrong",err})
        }
    },
    getCatagoryBySuperCatId:async(req,res)=>{
        try{
            let id=req.params.id
            let data=await catagory.find({parentId:id});
            console.log({data});
            if (data.length>0){
                dataIdList={}
                data.map(el=>{return el.id})

                return res.send({status:1,message:"success",data})
            }
            else{
                return res.send({status:2,message:"data not found",data})
        
            }

        }
        catch(err){
            return res.send({status:2,message:"data not found",data})


        }
    },
    editCatagory:async(req,res)=>{
        let id=req.params.id
        let dataForUpdate=req.body
        try{
            let datas={}
            let data=await Item.findOne({id})
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
    deleteCatagory:async(req,res)=>{
        try{
            let id = req.params.id
            let removeData= await superCatgory.remove({ id })
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