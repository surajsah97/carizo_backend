const Item = require("../database/model/Item");
const ItemDetail = require("../database/model/ItemDetail");

module.exports = {
  getItem: async (req, res) => {
    try {
      let data = await Item.find();
      if (data.length > 0) {
        return res.send({ status: 1, message: "success", data });
      } else {
        return res.send({ status: 2, message: "no data found", data: [] });
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong" });
    }
  },
  getItemId: async (req, res) => {
    let id = req.params.id;
    try {
      let data = await Item.find({ id });
      if (data) {
        return res.send({ status: 1, message: "success", data });
      } else {
        return res.send({ status: 2, message: "no data found", data: [] });
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong" });
    }
  },

  getItemDetailByItemId: async (req, res) => {
    let id = req.params.id;
    try {
      let itemData = await Item.find({  id });
      if(itemData.length>0){

      let data = await ItemDetail.find({ itemId: id });
      if (data) {
        return res.send({ status: 1, message: "success", data,item:itemData });
      } else {
        return res.send({ status: 2, message: "no data found", data: [] });
      }
    }
    else{
      return res.send({ status: 2, message: "no data found", data: [] });

    }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong" });
    }
  },
  getItemBycatagoryId: async (req, res) => {
    let id = req.params.id;
    try {
      let data = await Item.find({
        $or: [{ parentId: id }, { catagoryId: id }]
      });
      if (data) {
        return res.send({ status: 1, message: "success", data });
      } else {
        return res.send({ status: 2, message: "no data found", data: [] });
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong" });
    }
  },
  getItemBySuperCatagoryId: async (req, res) => {
    let id = req.params.id;
    try {
      let data = await Item.find({ superCatagoryId: id });
      if (data) {
        return res.send({ status: 1, message: "success", data });
      } else {
        return res.send({ status: 2, message: "no data found", data: [] });
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong" });
    }
  },
  addItem: async (req, res) => {
    try {
      let image = req.file;
      let data = req.body;
      console.log(JSON.stringify(req.body, "==============", image));
      let datas = {};
      if (!data.name) {
        return res.send({ status: 2, message: "name required" });
      }
      datas.name = data.name;
      if (!data.count) {
        return res.send({ status: 2, message: "count required" });
      }
      datas.desc = data.desc ? data.desc : "";
      datas.count = data.count;
      datas.availablity = data.count > 0 ? 1 : 0;
      datas.status = 1;
      datas.image = image.path;
      datas.createdBy = req.userData.id;
      datas.updatedBy = req.userData.id;
      datas.price = data.price;
      datas.parentId = data.parentId;
      datas.subCatagoryId = data.subCatagoryId;
      if (!data.superCatgoryId) {
        return res.send({ status: 2, message: "super catagory required" });
      }
      datas.superCatgoryId = data.superCatgoryId;
      // datas.productDetail=data.productDetail
      datas.rating = data.rating;
      datas.createdDate = new Date().valueOf();
      datas.updatedDate = datas.createdDate;
      let uploadedData = await Item.create(datas);
      if (uploadedData) {
        return res.send({ status: 1, message: "success", data: datas });
      } else {
        return res.send({
          status: 1,
          message: "somethin went wrong",
          data: []
        });
      }
    } catch (err) {
      console.log({err});
      return res.send({ status: 3, message: "something went wrong" });
    }
  },

  addItemDetail: async (req, res) => {
    let data = req.body;
    let image = req.files;
    console.log({data,image});
    // let id=req.params.id
    try {
      let datas = {};
      if (!req.body.itemId) {
        return res.send({ status: 2, message: "item id required" });
      }
      if (!data.name) {
        return res.send({ status: 2, message: "name required" });
      }
      datas.name = data.name;
      if (!data.count) {
        return res.send({ status: 2, message: "count required" });
      }
      datas.count = data.count;
      datas.availablity = data.count > 0 ? 1 : 0;
      // if (!image.image){
      //     return res.send({status:2,message:"image required"})
      // }
      datas.images = image.map(el => {
        return el.path;
      });
      // if (data.fectures) {
      //   return res.send({ status: 2, message: "fectures required" });
      // }
      datas.fectures = data.fectures ? data.fectures : {};
      if (!data.desc) {
        return res.send({ status: 2, message: "desc required" });
      }
      datas.desc = data.desc;
      // if(!data.parentId){
      //     return res.send({status:2,message:"parentId required"})
      // }
      // if(!data.isCashOnDelivary){
      //     return res.send({status:2,message:"isCashOnDelivary required"})

      // }
      datas.isCashOnDelivary = data.isCashOnDelivary;
      if (!data.returnPolicy) {
        return res.send({ status: 2, message: "returnPolicy required" });
      }
      datas.returnPolicy = data.returnPolicy;
      if (!data.warantyPeriod) {
        return res.send({ status: 2, message: "returnPolicy required" });
      }
      console.log({map:
        data.mappingItem});
      datas.mappingItem=data.mappingItem?JSON.parse(data.mappingItem):{}
      datas.warantyPeriod = data.warantyPeriod;
      datas.ProductType = data.ProductType ? data.ProductType : "";
      datas.itemId = data.itemId;
      datas.createdDate = new Date().valueOf();
      datas.updatedDate = datas.createdDate;
      datas.createdBy = req.userData.id;
      datas.price = data.price ? data.price : 0;
      datas.color = data.color ? data.color : 0;
      if(data.size){                                                                                                                                                                                                                                                                                                                                                                                                   
        datas.size=data.size
      }
      datas.status = 1;
      if (!data.title) {
        return res.send({ status: 2, message: "tittle required" });
      }
      datas.title = data.title;
      datas.updatedBy = req.userData.id;

      // let CreatedItem=req.body.fectures?req.body.fectures:{}
      let CreatedItem = await ItemDetail.create(datas);
      if (CreatedItem) {
        return res.send({ status: 1, message: "success", datas });
      } else {
        return res.send({ status: 1, message: "something went wrong" });
      }
    } catch (err) {
      console.log({ err });
      return res.send({ status: 3, message: "somethig went wrong ", err });
    }
  },
  editItem: async (req, res) => {
    let id = req.params.id;
    let dataForUpdate = req.body;
    try {
      let datas = {};
      let data = await Item.findOne({ id });
      if (dataForUpdate.name) {
        datas.name = dataForUpdate.name;
      }
      if (dataForUpdate.desc) {
        datas.desc = dataForUpdate.desc;
      }
      if (dataForUpdate.count) {
        datas.count = dataForUpdate.count;
        datas.availablity = datas.count > 0 ? 1 : 0;
      }
      if (dataForUpdate.rating) {
        datas.rating = dataForUpdate.rating;
      }
      if (dataForUpdate.desc) {
        datas.desc = dataForUpdate.desc;
      }
      datas.updatedBy = req.body.userData.userId;

      datas.updatedDate = new Date().valueOf();
      let updateData = await Item.findOneAndUpdate({ id }, { datas });
      if (updateData) {
        return res.send({ status: 1, message: "updated successfully", id });
      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong", err });
    }
  },

  editItemDetail: async (req, res) => {
    try {
      let id = req.params.id;
      let dataForUpdate = req.body;
      let datas = {};
      let data = await Item.findOne({ id });
      if (dataForUpdate.name) {
        datas.name = dataForUpdate.name;
      }
      if (dataForUpdate.desc) {
        datas.desc = dataForUpdate.desc;
      }
      if (dataForUpdate.count) {
        datas.count = dataForUpdate.count;
        datas.availablity = datas.count > 0 ? 1 : 0;
      }
      if (dataForUpdate.rating) {
        datas.rating = dataForUpdate.rating;
      }
      if(dataForUpdate.fectures){
        datas.fectures=dataForUpdate.fectures
      }
      if(dataForUpdate.size){
        datas.size=dataForUpdate.size
      }
      if(dataForUpdate.price){
        datas.price=dataForUpdate.price
      }
      if(dataForUpdate.color){
        datas.color=dataForUpdate.color
      }
      if(dataForUpdate.mappingItem){
        datas.mappingItem=dataForUpdate.mappingItem

      }

      datas.updatedBy = req.body.userData.userId;

      datas.updatedDate = new Date().valueOf();
      let updateData = await ItemDetail.findOneAndUpdate({ id }, { datas });
      if(updateData){
        return res.send({status:1,message:"successfully updated",datas})
      }
      else{
        return res.send({status:2,message:"somthing went wrong",datas})

      }
    } catch (err) {
      return res.send({ status: 3, message: "something went wrong", err });
    }
  },
  deleteItem:async(req,res)=>{
    try{
        let id = req.params.id
        let removeData= await Item.remove({ id })
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
deleteItemDetail:async(req,res)=>{
    try{
        let id = req.params.id
        let removeData= await ItemDetail.remove({ id })
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

};
