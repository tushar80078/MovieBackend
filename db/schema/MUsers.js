const mongoose=require("mongoose");
const {Schema}=require('mongoose');

const muserSchema=new Schema({

    userName:{
        type:String,
        require:true
    },

    emailId:{
        type:String,
        require:true,
        unique:true
    },

    mobileNo:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        type:String,
        require:true,
    }

})

const MUSERS=mongoose.model('Musers',muserSchema);

module.exports=MUSERS;