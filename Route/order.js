const express=require("express")
const userRoute=express.Router()
const orders=require("../controller/orderController")
const upload=require("../middleware/addImage")

userRoute.get("/order",orders.getOrder)
userRoute.post("/order",upload.single("image"),orders.addOrder)
userRoute.patch("/order/:id",orders.editOrder)
userRoute.delete("/order/:id",orders.deleteOrder)

module.exports=userRoute