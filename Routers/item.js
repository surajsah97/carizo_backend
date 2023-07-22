const itemController = require("../controller/itemController")

module.exports=(route)=>{
    route.get("/item",itemController.getItem)
    route.get("/item/item-detail/:id",itemController.getItemDetailByItemId)
    route.get("/catagory/item/:id",itemController.getItemBycatagoryId)
    route.get("/super-cat/item/:id",itemController.getItemBySuperCatagoryId)
    route.get("/item/:id",itemController.getItemId)
    route.post("/item",itemController.addItem)
    route.post("/item/item-detail",itemController.addItemDetail)
    route.patch("/item/:id",itemController.editItem)
    route.patch("/item-detail/:id",itemController.editItemDetail)
    route.delete("/item/:id",itemController.deleteItem)
    route.delete("/item-detail/:id",itemController.deleteItemDetail)









}