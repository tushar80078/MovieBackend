const mongoose=require("mongoose");
const {Schema}=require('mongoose');

const moviesSchema=new Schema({

    imageURL:{
        type:String,
        require:true
    },

    movieName:{
        type:String,
        require:true,
        unique:true
    },

    availableIn:{
        type:String,
        require:true
    },

    duration:{
        type:String,
        require:true,
    },

    about:{
        type:String,
        require:true
    }
})

const MOVIES=mongoose.model('Movies',moviesSchema);

module.exports=MOVIES;