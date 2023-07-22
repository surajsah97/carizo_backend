module.exports=(app,express)=>{
    const superCatgory=express.Router()
    app.use("/",superCatgory)
    require("./superCatgory")(superCatgory)



    const catagory=express.Router()
    app.use("/",catagory)
    require("./catagory")(catagory)


    
    const subCatagory=express.Router()
    app.use("/",subCatagory)
    require("./catagory")(subCatagory)


    const item=express.Router()
    app.use("/",item)
    require("./item")(item)

    const employee=express.Router()
    app.use("/",employee)
    require("./employee",employee)

}