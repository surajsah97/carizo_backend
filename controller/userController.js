const employee=require("../database/model/employee")
let jwt =require("jsonwebtoken")
module.exports={
    getLoginData:async(req,res)=>{
        try{

        }
        catch(err){

        }
    },
    postLoginData:async(req,res)=>{
            let image=req.file
        let data=req.body
        console.log({data});
        // console.log(JSON.stringify(req.body,"=============="));
        try{
        let datas={}
            if(!data.email){
                return res.send({status:2,message:"email required"})
            }
            if(!data.password){
                return res.send({status:2,message:"password required"})
            }
            console.log({dd:data.email});
            let userData=await user.findOne({emailId:data.email})
            console.log({userData});
            if(userData){
                if(userData.password==data.password){
                    console.log("==================================");
                    let token=jwt.sign(JSON.stringify(userData), "secreteCode");
                    console.log("=====>",{token});
                    let isAdmin=userData.role
                    return res.json ({status:1,message:"success",token,isAdmin})
                }
                else{
                    return res.json ({status:2,message:"wrong pssword"})

                }
            }
            else{
                return res.send({status:2,message:"incorrect email id"})
            }
            

        }
        catch(err){
console.log({err});
        }
    },
    registerUser:async(req,res)=>{
        let data=req.body
        try{
            let userData=await user.create(data)

            // name: { type: String, required: true },
            // status: { type: Number, required: true },
            // contactNumber: { type: Number, required: true },
            // image: { type: String, required: true },
            // about: { type: String, required: true },
            // emailId: { type: String, required: true },
            // address:{type:String,required:true},
            // createdBy:{type:String,required:true},
            // createdDate:{type:Number,required:true},
            // updatedBy:{type:String,required:true},
            // updatedDate:{type:Number,required:true},
            if(userData){
                return res.send({status:1,message:"success"})
            }
            // if (!data.contactNumber) {
                
            // }

        }
        catch(err){
            console.log({err});
            
        }
    }    
}