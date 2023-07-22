const express=require("express")
const userRoute=express.Router()
const catalog=require("../controller/catagueController")
const jwt = require("../middleware/jwt")
const upload=require("../middleware/addImage")

userRoute.get("/catalog",catalog.getCatalog)
userRoute.post("/catalog",jwt,upload.single("image"),catalog.addCatalog)
userRoute.patch("/catalog/:id",jwt,catalog.editCatalog)
userRoute.delete("/catalog/:id",jwt,catalog.deleteCatalog)
userRoute.get("/item",catalog.getItem)
userRoute.post("/item",jwt,upload.single("image"),catalog.addItem)
userRoute.patch("/item/:id",jwt,catalog.editItem)
userRoute.get("/item/:id",catalog.getItemDetailById)
userRoute.get("/get-item/:id",catalog.getItems)

userRoute.post("/item/:id",jwt,upload.array("image"),catalog.addItemList)

userRoute.get("/catalog/:id",jwt,catalog.getCatalogById)
userRoute.post("/sub-catalog",jwt,upload.single("image"),catalog.addSubCatgory)
userRoute.get("/all-catalog",catalog.getAllCatSuperCatItem)








module.exports=userRoute