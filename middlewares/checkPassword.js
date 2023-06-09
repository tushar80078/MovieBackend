const bcrypt=require("bcrypt");
const {getUserByUserEmailId}=require("../db/MusersDB")

const checkPasswordMiddleware=(req,res,next)=>{
 
    console.log(req.body);

    getUserByUserEmailId(req.body.emailId).then(data=>{

        if(data)
        {
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if(!result)
                {
                 next(new Error("Password Is Wrong"))
                }
                else{
                 next();
                }
             });
               }else
               {
                next(new Error("User Not Found"));
               }  
    })
}

module.exports=checkPasswordMiddleware;