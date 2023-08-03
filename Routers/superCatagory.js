const superCatagory=require("../controller/SuperCatagoryComtroller")
const fileUpload=require("../middleware/addImage");

module.exports=(route,jwt)=>{
    route.get("/super-catagory",superCatagory.getSuperCatagory)
    route.post("/super-catagory",jwt,fileUpload.single("image"),superCatagory.addSuperCatagory)
    route.get("/super-catagory/:id",superCatagory.getSuperCatagoryId)
    route.get("/cat-super-catagory",superCatagory.getAllCatWithSuperCatItem)
    route.delete("/super-catagory/:id",superCatagory.deleteSuperCatagory)
    route.patch("/super-catagory/:id",jwt,fileUpload.single("image"),superCatagory.editSuperCtagory)





    }