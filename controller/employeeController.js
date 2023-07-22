const employee = require("../database/model/employee")

module.exports={
    getEmployee:async(req,res)=>{
        try{
            
            let data=await employee.find()
            if(data){
                return res.send({status:1,message:"success",data})
            }
            else{
                return res.send({status:2,message:"data not found",data:[]})
            }
        }
        catch(err){
            return res.send({status:3,message:"something went wrong"})
        }
    },
    addEmployee:async(req,res)=>{
        let data = req.body;
    let image = req.files;
    // let id=req.params.id
    try {
      let datas = {};
    
      if (!data.name) {
        return res.send({ status: 2, message: "name required" });
      }
      datas.name = data.name;
      if(!data.contactNumber){
        return res.send({ status: 2, message: "contactNumber required" });
      }
      if(!data.emailId){
        return res.send({ status: 2, message: "emailId required" });
      }
      let contactNumberCheck=await employee.find({"$or":[{contactNumber:data.contactNumber},{emailId:data.emailId}]})
      if(contactNumberCheck.length>0){
        return res.send({status:2,message:"user already registered with contact number or email id"})
      }
      datas.contactNumber=data.contactNumber
      datas.emailId=data.emailId
      if(!data.address1){
        return res.send({ status: 2, message: "address1 required" });

      }
      if(!data.city){
        return res.send({ status: 2, message: "city required" });

      }
      if(!data.state){
        return res.send({ status: 2, message: "state required" });

      }
      if(!data.zip){
        return res.send({ status: 2, message: "zip required" });

      }
      if(!data.country){
        return res.send({ status: 2, message: "country required" });

      }
      if(!data.role){
        return res.send({ status: 2, message: "role required" });

      }
      datas.image=image.path

datas.city=data.city
datas.state=data.state
datas.zip=data.zip
datas.address1=data.address1
datas.country=data.country
datas.role=data.role
      // if (!image.image){
      //     return res.send({status:2,message:"image required"})
      // }
      
      if (!data.about) {
        return res.send({ status: 2, message: "desc required" });
      }
      datas.createdDate = new Date().valueOf();
      datas.updatedDate = datas.createdDate;
      datas.createdBy = req.userData.userId;



      datas.status = 1;
      datas.updatedBy = req.userData.userId;

      // let CreatedItem=req.body.fectures?req.body.fectures:{}
      let createEmployee = await employee.create(datas);
      if (createEmployee) {
        return res.send({ status: 1, message: "success", datas });
      } else {
        return res.send({ status: 1, message: "something went wrong" });
      }
    } catch (err) {
      console.log({ err });
      return res.send({ status: 3, message: "somethig went wrong ", err });
    }

    },
    editEmployee:async(req,res)=>{

    },
    deleteEmployee:async(req,res)=>{
        try{
            let id = req.params.id
            let removeData= await ItemDetail.remove({ id })
            if(removeData){
                return res.send({status:1,message:"updated successfully",id})
            }
            else{   
                return res.send({status:2,message:"something went wrong"})
            }
    
        }
        catch (err) {
            return res.send({status:2,message:"something went wrong",err})
        }
    
    }
}