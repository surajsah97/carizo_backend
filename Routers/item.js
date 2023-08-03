const itemController = require("../controller/itemController")
const fileUpload=require("../middleware/addImage");

module.exports=(route,jwt)=>{
    route.get("/item",itemController.getItem)
    route.get("/item/item-detail/:id",itemController.getItemDetailByItemId)
    route.get("/catagory/item/:id",itemController.getItemBycatagoryId)
    route.get("/super-cat/item/:id",itemController.getItemBySuperCatagoryId)
    route.get("/item/:id",itemController.getItemId)
    route.post("/item",jwt,fileUpload.single("image"),itemController.addItem)
    route.post("/item/item-detail",jwt,fileUpload.array("image"),itemController.addItemDetail)
    route.patch("/item/:id",jwt,fileUpload.single("image"),itemController.editItem)
    route.patch("/item-detail/:id",jwt,fileUpload.single("image"),itemController.editItemDetail)
    route.delete("/item/:id",itemController.deleteItem)
    route.delete("/item-detail/:id",itemController.deleteItemDetail)

}