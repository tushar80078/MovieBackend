const express=require("express");
const router=express.Router();
const {addMovie,getAllMoviesData}=require('../controllers/MoviesController');


router.post("/",addMovie);

router.get("/",getAllMoviesData);

module.exports=router