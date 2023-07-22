module.exports=(app,express)=>{
    const superCatgory=express.Router()
    app.use("/",superCatgory)
    require("./superCatgory")(superCatgory)






    const catagory=express.Router()
}