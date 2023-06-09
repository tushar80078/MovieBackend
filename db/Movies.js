const Movies=require("./schema/Movies")

const addMovieDB=(movieData)=>{

    return new Promise((res,rej)=>{

        Movies.findOne({movieName:movieData.movieName}).then(data=>{

            if(data)
            {
                rej("Movie Already Posted")
            }else{
                const movie=new Movies(movieData);
                res(movie.save());
            }
        })
    }).catch(err=>rej(err));

}


const getAllMoviesDataDB=()=>{
    return Movies.find();
}

module.exports={
    addMovieDB,
    getAllMoviesDataDB   
}

