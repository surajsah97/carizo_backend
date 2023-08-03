let jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{
    try{
        let token = req.headers.authorization;
    if (req.session && req.session.jwt) {
        token = req.session.jwt;
    }
    if (!token) {
        res.status(401).send({ message: "No token provided" })
    } else {
        if (token.split(" ").length > 1) {
            token = token.split(" ")[1];
        }
        console.log({ token });
        jwt.verify(token, "secreteCode", async (err, value) => {
            if (err) {

                console.log(err);
                res.status(401).send({ message: "Invalid token provided" });
            } else {
                console.log({value});
                req["userData"]={...value}
                console.log(req.userData.userId);
                next()

            }
        })
        
    }
}
    catch(err){
        console.log({err});
    }
}