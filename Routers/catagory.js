const catagoryController = require("../controller/catagoryController")
const fileUpload=require("../middleware/addImage");

module.exports=(route,jwt)=>{






    
    route.get("/catagory",catagoryController.getCatagory)
    route.get("/catagory/:id",catagoryController.getCatagoryBySuperCatId)
    route.get("/catagory-detail/:id",catagoryController.getCatagoryById)
    route.post("/catagory",jwt,fileUpload.single("image"),catagoryController.addCatagory)
    route.patch("/catagory/:id",jwt,fileUpload.single("image"),catagoryController.editCatagory)
    route.patch("/add-data",catagoryController.adddd)

    route.delete("/catagory",catagoryController.deleteCatagory)



}