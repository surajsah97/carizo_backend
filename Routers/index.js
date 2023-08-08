let fileUpload=require("../middleware/addImage")
const jwt = require("../middleware/jwt")
module.exports=(app,express)=>{
    const superCatgory=express.Router()
    app.use("/",superCatgory)
    require("./superCatagory")(superCatgory,jwt)


    const catagory=express.Router()
    app.use("/",catagory)
    require("./catagory")(catagory,jwt)


    
    const subCatagory=express.Router()
    app.use("/",subCatagory)
    require("./subCatagory")(subCatagory,jwt)

    const employee=express.Router()
    app.use("/",employee)
    require("./employee")(employee)

    const item=express.Router()
    app.use("/",item)
    require("./item")(item,jwt)


}