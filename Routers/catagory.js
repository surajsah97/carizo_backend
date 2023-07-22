const catagoryController = require("../controller/catagoryController")

module.exports=(route)=>{
    route.get("/catagory",catagoryController.getCatagory)
    route.get("/catagory/:id",catagoryController.getCatagoryBySuperCatId)
    route.get("/catagory-detail/:id",catagoryController.getCatagoryById)
    route.post("/catagory",catagoryController.addCatagory)
    route.patch("/catagory/:id",catagoryController.editCatagory)
    route.delete("/catagory",catagoryController.deleteCatagory)



}