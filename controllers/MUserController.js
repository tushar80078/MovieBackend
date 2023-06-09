const jwt = require('jsonwebtoken');
const {createUser}=require("../db/MusersDB")


const createUserController=(req,res,next)=>{
    const userData=req.body;
    createUser(userData).then(response=>{
        res.json({
            status:"Success",
            message:"User Created"
        })
    }).catch(err=>next(err));
}


const signInUser=(req,res,next)=>{

    let token = jwt.sign({ emailId: req.body.emailId}, process.env.JWTKEY);

    res.json({
        status:"Success",
        token:token,
        message:"User Logged In"
    })
}


module.exports={
    createUserController,
    signInUser
}