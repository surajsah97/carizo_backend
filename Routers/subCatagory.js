const subCatagoryController = require("../controller/subCatagoryController")

module.exports=(Route)=>{
    Route.get("/sub-catagory",subCatagoryController.getSubCatagory)
    Route.post("/sub-catagory",subCatagoryController.addsubCatagory)
    Route.get("/sub-catagory/:id",subCatagoryController.getSubCatagoryByCatId)
    Route.patch("/sub-catagory/:id",subCatagoryController.editSubCatagory)
    Route.delete("/sub-catagory/:id",subCatagoryController.removeSubCatagory)




}