const Catalog = require("../database/model/catagory");
const Item = require("../database/model/Item");
const ItemDetail = require("../database/model/ItemDetail");
const subCatagory = require("../database/model/subCatagory");
const superCatagory = require("../database/model/superCatagory");

module.exports={
    getCatalog:async(req,res)=>{
try{
    // console.log("=-=-=-=-=-=-=-=-suraj");
    let data=await Catalog.find();
    if (data.length>0){
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
    getCatalogBysuperCatalogId:async(req,res)=>{
        try{
            let id=req.params.id
            let data=await Catalog.find({parentId:id});
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
            return res.send({status:3,message:"something went wrong",err})
        
            
        }
            },
    getCatalogById:async(req,res)=>{
        id=req.params.id
        try{
            console.log("=-=-=-=-=-=-=-=-suraj");
            let data=await Catalog.find({parentId:id});
            if (data.length>0){
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
    addCatalog:async(req,res)=>{
        
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
                datas.parentId=data.parentId
                // datas.productDetail=data.productDetail
                datas.createdDate=new Date().valueOf()
                datas.updatedDate=datas.createdDate
                let uploadedData=await Catalog.create(datas)
                if(uploadedData){
                    return res.send({status:1,message:"success",data:datas})
                }

    
        }
        catch(err){
            console.log({err});
            return res.send({status:1,message:"success",err})
            
        }
    },
    getSubCatalog:async(req,res)=>{
        try{
            let data=await Catalog.find();
    if (data.length>0){
        return res.send({status:1,message:"success",data})
    }
    else{
        return res.send({status:2,message:"data not found",data})

    } 

        }
        catch(err){
            
        }
    },
    addSubCatalog:async(req,res)=>{
        try{

        }
        catch(err){
            
        }
    },
    getItem:async(req,res)=>{
        try{
            let data=await Item.find();
            if (data.length>0){
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



    getItemDetailById:async(req,res)=>{
        let id=req.params.id
try{
    let data=await ItemDetail.findOne({id})
    if(data){
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
    addItemById:async(req,res)=>{
        let id=req.params.id
        let data=req.body
        let image=req.files
try{
    // name: { type: String, required: true },
    // status: { type: Number, required: true },
    // count: { type: Number, required: true },
    // images: { type: Array, required: true },
    // fectures: { type: Object, required: true },
    // desc: { type: String, required: true },
    // size:{type:String,required:true},
    // color:{type:String,required:true},
    // availablity: { type: String, required: true },
    // parentId:{type:String,required:true}
    if(!data.name){
        return res.send({status:2,message:"name required"})
    }
    if(!data.count){
        return res.send({status:2,message:"count required"})
    }
    // if(!data.){
    //     return res.send({status:2,message:"name required"})
    // }
    let datas={}
    datas.name=data.name
    datas.availablity=data.count
    datas.desc=data.desc?data.desc:""
    datas.size=datas.size?datas.size:""
    datas.color=data.color?data.color:""
    datas.fectures=data.fectures?data.fectures:{}
    datas.images=image.map(el=>{return el.path})
    datas.createdBy=req.userData.userId
    datas.updatedBy=req.userData.userId
                datas.price=data.price
                datas.itemId=id
                // datas.productDetail=data.productDetail
                datas.createdDate=new Date().valueOf()
                datas.updatedDate=datas.createdDate
                let items=await ItemDetail.create(datas)
                if(items){
                    return res.send({status:1,message:"success",datas})
                }
                else{
                    return res.send({status:2,message:"something went wrong"})


                }

}
catch(err){
    console.log({err});
    return res.send({status:3,message:"something went wrong"})
}
    },

    addItem:async(req,res)=>{
        try{

            // let image=req.file
            let image=req.file
            
            console.log({image});
            let data=req.body
            // console.log(JSON.stringify(req.body,"=============="));
            let datas={}
                if(!data.name){
                    return res.send({status:2,message:"name required"})
                }
                datas.name=data.name
                if(!data.count){
                    return res.send({status:2,message:"count required"})
                }
                datas.count=data.count
                datas.availablity=data.count>0?1:0
                datas.status=1
                datas.image=image.path
                datas.createdBy=req.userData.userId
                datas.updatedBy=req.userData.userId
                datas.price=data.price
                datas.desc=data.desc?data.desc:""
                datas.parentId=data.parentId
                datas.rating=data.rating
                datas.icatagoryId=data.catagoryId?data.catagoryId:""
                datas.superCatgoryId=data.superCatgoryId
                datas.rating=data.rating
                datas.createdDate=new Date().valueOf()
                datas.updatedDate=datas.createdDate
                let uploadedData=await Item.create(datas)
                if(uploadedData){
                    return res.send({status:1,message:"success",data:datas})
                }

        }
        catch(err){
            console.log({err});
            return res.send({status:3,message:"something went wrong",data:[]})

            
        }

    },
    editCatalog:async(req,res)=>{
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
            
        }
        catch(err){
            
        }
    },
    addItemList:async(req,res)=>{
        let data=req.body
        let image=req.files
        let id=req.params.id
try{
    let datas={}
    if (!data.name){
        return res.send({status:2,message:"name required"})
    }
    datas.name=data.name
    if (!data.count){
        return res.send({status:2,message:"count required"})
    }
    datas.count=data.count
    datas.availablity=data.count>0?1:0
    // if (!image.image){
    //     return res.send({status:2,message:"image required"})
    // }
    datas.images=image.map(el=>{return el.path})
    if(!data.fectures){
        return res.send({status:2,message:"fectures required"})
    }
    datas.fectures=data.fectures?data.fectures:{}
    if(!data.desc){
        return res.send({status:2,message:"desc required"})
    }
    datas.desc=data.desc
    // if(!data.parentId){
    //     return res.send({status:2,message:"parentId required"})
    // }
    // if(!data.isCashOnDelivary){
    //     return res.send({status:2,message:"isCashOnDelivary required"})

    // }
    datas.isCashOnDelivary=data.isCashOnDelivary
    if(!data.returnPolicy){
        return res.send({status:2,message:"returnPolicy required"})
    }
    datas.returnPolicy=data.returnPolicy
    if(!data.warantyPeriod){
        return res.send({status:2,message:"returnPolicy required"})
    }
    datas.warantyPeriod=data.warantyPeriod
    datas.ProductType=data.ProductType?data.ProductType:""
    datas.itemId=id
    datas.createdDate=new Date().valueOf()
    datas.updatedDate=datas.createdDate
    datas.createdBy=req.userData.userId
    datas.price=data.price?data.price:0
    datas.color=data.color?data.color:0
datas.status=1
datas.title=data.title?data.title:""
    datas.updatedBy=req.userData.userId
    
    // let CreatedItem=req.body.fectures?req.body.fectures:{}
    let CreatedItem=await ItemDetail.create(datas)
    if(CreatedItem){
return res.send({status:1,message:"success",datas})
    }
    else{
return res.send({status:1,message:"something went wrong"})
        
    }

}
catch(err){
    console.log({err});
    return res.send({status:3,message:"somethig went wrong ",err})

}
    },
    editItem:async(req,res)=>{
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
            if(dataForUpdate.rating){
                datas.rating=dataForUpdate.rating
            }
            if(dataForUpdate.desc){
                datas.desc=dataForUpdate.desc

            }
            let updateData=await Item.findOneAndUpdate({id},{datas})
            if(updateData){
                return res.send({status:1,message:"updated successfully",id})
            }
        }
        catch(err){
            return res.send({status:3,message:"something went wrong",err})
        }
    },
    etitSubCatalog:async(req,res)=>{
        try{

        }
        catch(err){
            
        }
    },
    addSubCatgory:async(req,res)=>{
        
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
                datas.parentId=data.parentId
                if(!data.superCatagoryId){
                    return res.send({status:2,message:"catagoryId required"})
                }
                datas.superCatagoryId=data.superCatagoryId
                // datas.productDetail=data.productDetail

                datas.createdDate=new Date().valueOf()
                datas.updatedDate=datas.createdDate
                let uploadedData=await subCatagory.create(datas)
                if(uploadedData){
                    return res.send({status:1,message:"success",data:datas})
                }
            }
        catch(err){
            console.log({err});
            return res.send({status:3,message:"something went wrong"})
        }
    },
    deleteCatalog:async(req,res)=>{
        try{

        }
        catch(err){
            
        }
    },
    getItems:async(req,res)=>{
        let id=req.params.id
        try{
            let data=await Item.find({parentId:id})
            console.log({data});
            if(data.length>0){
                return res.send({status:1,message:"success",data})
            }
            else{
                return res.send({status:2,message:"no data found",data:[]})

            }
        }
        catch(err){
            return res.send({status:3,message:"something wet wrong",data:[]})

        }
    },
    getData:async(req,res)=>{
        try{
            console.log("-==-=-=-=-");
            let findData=await Catalog.find({parentId:"ec13a0da-3cee-4dd4-ba3c-7a5b396da8fb"})
            console.log({findData});
            let uploadedData=await subCatagory.create(findData)
            console.log({uploadedData});

        }
        catch(err){
            return res.send({status:3,message:"something went wrong"})

        }

    },



    getAllCatSuperCatItem:async(req,res)=>{
        try{
            // let ddd=await Catalog.remove({id:})
        let datas=await superCatagory.aggregate([{
            "$lookup":{from:"catagories",localField:"id",foreignField:"parentId",as:"catagory"},
        },
        {"$limit":5}
        // {"$match":{"$eq":["$catagory.id","380dca7f-ac93-4af1-a372-c0329f503499"]}}
    ])
    console.log({datas});
        if(datas.length>0){
return res.send({status:1,message:"success",data:datas})
        }
        else{
            return res.send({status:2,message:"no Data found"})

        }

        }
        catch(err){
            return res.send({status:3,message:"something went wrong"})

            
        }
    }
}