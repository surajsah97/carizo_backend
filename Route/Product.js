const express=require("express")
const userRoute=express.Router()
const products=require("../controller/productController")
const upload=require("../middleware/addImage")
const jwt = require("../middleware/jwt")

userRoute.get("/product",products.getProduct)
userRoute.post("/product",jwt,upload.single("image"),products.addProduct)
userRoute.patch("/product/:id",jwt,products.editProduct)
userRoute.delete("/product/:id",products.deleteProduct)

module.exports=userRoute