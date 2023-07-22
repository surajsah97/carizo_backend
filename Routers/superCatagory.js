const superCatagory=require("../controller/SuperCatagoryComtroller")

module.exports=(route)=>{
    route.get("/super-catagory",superCatagory.getSuperCatagory)
    route.post("/super-catagory",superCatagory.addSuperCatagory)
    route.get("/super-catagory/:id",superCatagory.getSuperCatagoryId)
    route.get("/cat-super-catagory",superCatagory.getAllCatWithSuperCatItem)
    route.delete("/super-catagory/:id",superCatagory.deleteSuperCatagory)
    route.patch("/super-catagory/:id",superCatagory.editSuperCtagory)





    }