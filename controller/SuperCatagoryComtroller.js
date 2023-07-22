const superCatgory = require("../database/model/superCatagory")

module.exports = {
    getSuperCatagory: async (req, res, next) => {
        try {
            let data = await superCatgory.find();
            if (data.length > 0) {
                return res.send({ status: 1, message: "success", data })
            }
            else {
                return res.send({ status: 2, message: "data not found", data })
            }
        }
        catch (err) {
            return res.send({ status: 3, message: "something went wrong", err })
        }


    },

    getSuperCatagoryId: async (req, res, next) => {
        let id = req.params.id
        try {
            let data = await superCatgory.find();
            if (data.length > 0) {
                return res.send({ status: 1, message: "success", data })
            }
            else {
                return res.send({ status: 2, message: "data not found", data })
            }

        }
        catch (err) {
            console.log({ err });
            return res.send({ status: 3, message: "something went wrong", err })


        }
    },

    addSuperCatagory: async (req, res, next) => {
        let image = req.file
        console.log({ image });
        let data = req.body
        try {
            let datas = {}
            if (!data.name) {
                return res.send({ status: 2, message: "name required" })
            }
            datas.name = data.name
            if (!data.count) {
                return res.send({ status: 2, message: "count required" })
            }
            datas.count = data.count
            datas.availablity = data.count > 0 ? 1 : 0
            datas.status = 1
            datas.image = image.path
            datas.desc = req.body.desc
            datas.createdBy = req.userData.userId
            datas.updatedBy = req.userData.userId
            datas.createdDate = new Date().valueOf()
            datas.updatedDate = datas.createdDate
            let uploadedData = await product.create(datas)
            if (uploadedData) {
                return res.send({ status: 1, message: "success", data: datas })
            }
            else {
                return res.send({ status: 2, message: "something went wrong", data: [] })
            }
        }
        catch (err) {
            return res.send({ status: 3, message: "something went wrong" })
        }
    },
    editSuperCtagory: async (req, res, next) => {
        let id = req.params.id
        let dataForUpdate = req.body
        try {
            let datas = {}
            let data = await superCatgory.findOne({ id })
            if (dataForUpdate.name) {
                datas.name = dataForUpdate.name
            }
            if (dataForUpdate.desc) {
                datas.desc = dataForUpdate.desc
            }
            if (dataForUpdate.count) {
                datas.count = dataForUpdate.count
                datas.availablity = datas.count > 0 ? 1 : 0
            }
            let updateData = await superCatgory.findOneAndUpdate({ id }, { datas })
            if (updateData) {
                return res.send({ status: 1, message: "updated successfully", id })
            }
            else {
                return res.send({ status: 1, message: "updated successfully", id })
            }
        }

        catch (err) {
            return res.send({ status: 3, message: "something went wrong", err })

        }
    },
    deleteSuperCatagory: async (req, res, next) => {
        let id = req.params.id
        try {
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
    },
    getAllCatWithSuperCatItem:async(req,res)=>{
        try{
        let datas=await superCatgory.aggregate([{
            "$lookup":{from:"catagories",localField:"id",foreignField:"parentId",as:"catagory"},
        }
    ])
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