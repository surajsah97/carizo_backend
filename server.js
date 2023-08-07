const express=require("express")
const config = require("nodemon/lib/config")
const app =express()
const PORT=process.env.PORT||4000
// const produtRoute=require("./Route/Product")
// const orderRoute=require("./Route/order")
// const catalogRoute=require("./Route/catalogue")
const user=require("./Route/user")
const jwt=require("./middleware/jwt")
const database=require("./database/databaseConfig")
const {connect}=require("./database/databaseConfig")

connect()
app.use(require("cors")())

app.use(express.json())

require("./Routers")(app,express)









app.listen(PORT,(err)=>{
if (err) throw err
console.log({err});
})