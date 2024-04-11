import { MoviesData } from "../Data/MoviesData.js";
import asyncHandler from "express-async-handler";
import Movie from "../Models/MoviesModel.js"

 export const importMovies = asyncHandler(async(req,res) =>{
    await Movie.deleteMany({});
    const  movies =await Movie.insertMany(MoviesData);
    res.status(201).json(movies);
})

export const getMovies = asyncHandler(async(req,res)=>{
    try{
        const {catagory, time,language,rate,year,search} = req.query; 
        let query = {
            ...(catagory && {catagory}),
            ...(time && { time }),
            ...(language && { language }),
            ...(rate && { rate }),
            ...(year && { year }),
            ...(search && { name :{ $regex:search, $options: "i"} }),
            
        }
        const page = Number(req.query.pageNumber) || 1; // if page number is not provided in query we set it to 1
        const limit = 2;  // 2 movies per page
        const skip = (page-1) * limit;  // skip 2 movies per page

    //find movies by query skip and limit
        const movies = await Movie.find(query)
        .sort({createdAt: -1})
        .skip(skip).limit(limit)
    //get totol number of movies    

    const count  = await Movie.countDocuments(query);
    // send response with movie and total number of movie

    res.json({
        movies,
        page,
        pages:Math.ceil(count / limit), //total number of pages
        totalMovies:count,  // total number of  movies
    })

    }catch(error){
        res.status(400).json({message:error.message})

    }

})


 //@desc get movies by id
 // GET /api/movies/:id
 //@acess public

 export const getMovieById  = asyncHandler(async(req,res)=>{
    try{
     //find movie by id in database
     const movie = await Movie.findById(req.params.id);

     if(movie){
        res.json(movie)
     }
     else{
        res.status(404)
        throw new Error ("Movie not found")
     }

    }catch(error){
        res.status(400).json({message:error.message})
    }

})

 //@desc get top rated movies
 // GET /api/movies/random
 //@acess public
export const getTopratedMovies = asyncHandler(async(req,res)=>{
    try{
        //find top rate movies
        const movies = await Movie.find({}).sort({rate:-1});
        //send top rate movies to the client
        res.json(movies);

    }catch(error){

        res.staus(400).json({message:error.message})
    }
})

//@desc get top rated movies
 // GET /api/movies/random
 //@acess public

 export const getRandomMovies = asyncHandler(async(req,res)=>{
    try{
        const movies = await Movie.aggregate([{$sample:{size:8}}]);
        res.json(movies);

    }catch(error){
        res.status(400).json({message:error.message})

    }
 })

 export const createMovieReview = asyncHandler(async(req,res)=>{
    try{

        const movie = await Movie.findById(req.params.id);
        if(movie){
            //check if the user already reviewd this movie
            const alreadyReviewed = movie.reviews.find(
                (r) => r.userId.toString()=== req.user._id.toString()
            );
            if(alreadyReviewed){
                res.status(400);
                throw new Error("you already reviwed this movie");
            }
            //else create a new review

            const review = {
                userName:req.userfullName,
                userId:req.user._id,
                userImage:req.user.image,
                rating: Number(rating), 
                comment,
            }

            //push the new reivew to reivew array
            movie.reviews.push(review);
            //increment the number of reviews
            movie.numberofReviews = movie.reviews.length;
            //calculat the new rate

            movie.rate = movie.review.reduce((acc,item) => item.rating + acc,0) / movie.reviews.length;
            //save into the database

            await movie.save();
            res.status(201).json({
                message:"Review added",
            });

        }else{
            res.status(400);
            throw new Error("Movie not found");
        }
    }catch(error){
        res.status(400).json({message: error.message})

    }
 })



export const insertMovie = asyncHandler(async(req,res)=>{
    try{

     	var movie_name=req.body.name;
     	const moviecoll =await Movie.find({'name':movie_name})
         // console.log(moviecoll.length);
        if(moviecoll.length>0)
        {
            res.status(404);
            throw new Error("Movie is already exist");
            
        }   
        else
        {  
            //console.log(req);
            
            const Movies= new Movie({
                userId:req.body.userId,
                name:req.body.name,
                desc:req.body.desc,
                contentType:req.body.contentType,
                audioQuality:req.body.audioQuality,
                videoQuality:req.body.videoQuality,
                price:req.body.price,
                language:req.body.language,
                dubbing:req.body.dubbing,
                genre:req.body.genre,
                
                inCertified:req.body.inCertified,
                cetrificationName:req.body.cetrificationName,
                
                language:req.body.language,
                
                videofile:req.files.videofile[0].filename,
                certificationFiles:req.files.certificationFiles[0].filename,
                videoposter:req.files.videoposter[0].filename,

                stars:req.body.stars,
                numberofReviews:req.body.numberofReviews
                


                
             })  

             //console.log(Movies);
             const MovieData= await Movies.save();   
          res.status(201).json(MovieData);
            }    
           // }else{
            //    res.status(404);
           //     throw new Error("Movie is already exist");
           // }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});





export const updateMovie = asyncHandler(async(req,res)=>{
    try{

       // const {name,desc,image,titleImage,rate,numberofReviews,catagory,time,language,year,video,casts} = req.body;

        //find movie by id in database

        //console.log(req.body.id);

        const movie =await Movie.findById(req.body.id);
        if(movie){
            movie.name = req.body.name || movie.name;
            movie.desc = req.body.desc || movie.desc;
            movie.userId=req.body.userId || movie.userId;
            
            
            movie.contentType=req.body.contentType || movie.contentType;
            movie.audioQuality=req.body.audioQuality || movie.audioQuality;
            movie.videoQuality=req.body.videoQuality || movie.videoQuality;
            movie.price=req.body.price || movie.price;
            movie.language=req.body.language || movie.language;
            movie.dubbing=req.body.dubbing || movie.dubbing;
            movie.genre=req.body.genre || movie.genre;


            movie.inCertified=req.body.inCertified || movie.inCertified;
            movie.cetrificationName=req.body.cetrificationName || movie.cetrificationName;
            
            
            movie.videofile=req.files.videofile[0].filename || movie.videofile
            movie.certificationFiles=req.files.certificationFiles[0].filename || movie.certificationFiles;
            movie.videoposter=req.files.videoposter[0].filename || movie.videoposter;
            
            
            movie.language=req.body.language || movie.language;
            
            movie.stars=req.body.stars || movie.stars;
            movie.numberofReviews=req.body.numberofReviews || movie.numberofReviews;
                
            
          const updateMovie = await movie.save();

          //send the update moive to the client

          res.status(201).json(updateMovie)

            }else{
                res.status(404);
                throw new Error("Movie is not found");
            }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});





export const deleteMovie = asyncHandler(async(req,res)=>{
    try{

      

        console.log(req.body.id);

        //const movie =await Movie.findById(req.body.id);
        const del_Data=await Movie.deleteOne({_id:req.body.id});

        console.log(del_Data);

        if(del_Data){
           
          //send the update moive to the client
          res.status(201).json({ message: "this movie has been deleted successfully" });
          //res.status(201).json(updateMovie)

            }else{
                res.status(404);
                throw new Error("Movie is not found");
            }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});







export const updateMovie_old = asyncHandler(async(req,res)=>{
    try{

        const {name,desc,image,titleImage,rate,numberofReviews,catagory,time,language,year,video,casts} = req.body;

        //find movie by id in database

        const movie =await Movie.findById(req.params.id);
        if(movie){
            movie.name = name || movie.name;
            movie.desc = desc || movie.desc;   
            movie.image = image || movie.image; 
            movie.titleImage = titleImage || movie.titleImage;
            movie.rate = rate || movie.rate;
            movie.numberofReviews = numberofReviews || movie.numberofReviews;
            movie.catagory = catagory || movie.catagory;
            movie.time = time || movie.time;
            movie.language = language || movie.language;
            movie.year = year || movie.year;
            movie.video = video || movie.video;
            movie.casts = casts || movie.casts;

          // save the movie in database

          const updateMovie = await movie.save();

          //send the update moive to the client

          res.status(201).json(updateMovie)

            }else{
                res.status(404);
                throw new Error("Movie is not found");
            }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});