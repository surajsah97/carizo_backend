const subCatagoryController = require("../controller/subCatagoryController")
const fileUpload=require("../middleware/addImage");

module.exports=(Route,jwt)=>{
    Route.get("/sub-catagory",subCatagoryController.getSubCatagory)
    Route.post("/sub-catagory",jwt,fileUpload.single("image"),subCatagoryController.addsubCatagory)
    Route.get("/sub-catagory/:id",subCatagoryController.getSubCatagoryByCatId)
    Route.patch("/sub-catagory/:id",jwt,fileUpload.single("image"),subCatagoryController.editSubCatagory)
    Route.delete("/sub-catagory/:id",subCatagoryController.removeSubCatagory)




}