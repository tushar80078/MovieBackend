const {getAllMoviesDataDB,addMovieDB}=require("../db/Movies")


const addMovie=(req,res,next)=>{

    const data=req.body;

    addMovieDB(data).then(response=>{
        if(response)
        {
            res.json({
                status:"Success",
                message:"Movie Added successfully"
            })
        }
        else{
            next("Error while adding movie")
        }
    }).catch(err=>next(err));

}


const getAllMoviesData=(req,res,next)=>{
    getAllMoviesDataDB().then(data=>{
        if(data)
        {
            res.json({
                status:"Succes",
                data:data
            })
        }else{
            next("Error while getting movies")
        }
    }).catch(err=>next(err))
}


module.exports={
    addMovie,
    getAllMoviesData
}