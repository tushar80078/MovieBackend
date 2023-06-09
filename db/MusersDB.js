const Users=require("./schema/MUsers")



const createUser=(userData)=>{
    return new Promise((res,rej)=>{
        
        Users.findOne({emailId:userData.emailId}).then(data=>{
            if(data)
            {
                rej("User Already Exist With Given Email-ID Please Enter Another One")
            }else{
                const user=new Users(userData);
                res(user.save());
            }
        }).catch(err=>rej(err));

    })
}

const getUserByUserEmailId=(userId)=>{
    
    return Users.findOne({emailId:userId});
}


module.exports={
    createUser,
    getUserByUserEmailId
}