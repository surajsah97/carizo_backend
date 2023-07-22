const express=require("express")
const userRoute=express.Router()
const user=require("../controller/userController")

userRoute.get("/login",user.getLoginData)
userRoute.post("/login",user.postLoginData)
// userRoute.get("/login",user.getLoginData)
userRoute.post("/register",user.registerUser)


module.exports=userRoute