const user=require("../controller/employeeController")
const fileUpload=require("../middleware/addImage");

module.exports=(route)=>{
    
    route.get("/login",user.getEmployee)
    route.post("/login",user.loginEmployee)
    route.post("/register",fileUpload.single("image"),user.addEmployee)  


}