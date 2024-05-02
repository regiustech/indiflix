
import asyncHandler from "express-async-handler";
import Review from "../Models/ReviewModel.js";
import Comment from "../Models/CommentModel.js";

 export const importMovies = asyncHandler(async(req,res) =>{
    await Movie.deleteMany({});
    const  movies =await Movie.insertMany(MoviesData);
    res.status(201).json(movies);
})



 //@desc get movies by id
 // GET /api/movies/:id
 //@acess public

///////////////////////Review api//////////////////////////////
export const getallReview = asyncHandler(async(req,res)=>{
    try{
        const reviewdata = await Review.find({});
        res.json(reviewdata);

    }catch(error){
        res.status(400).json({message:error.message})

    }
 })







 export const getReviewById  = asyncHandler(async(req,res)=>{
    try{
     //find movie by id in database
 
     //console.log('-----------------');
     const reviewdata = await Review.find({movie_id:req.params.id});

     if(reviewdata){
        res.json(reviewdata)
     }
     else{
        res.status(404)

        throw new Error ("review1 not found")
     }

    }catch(error){
        res.status(400).json({message:error.message})
    }

})

 

//@desc get top rated movies
 // GET /api/movies/random
 //@acess public

 
 


export const insertReview = asyncHandler(async(req,res)=>{
    try{

     	    //console.log(req.body);
            const reviewscoll= new Review({
				movie_id:req.body.movie_id,
                user_id:req.body.user_id,
				rating:req.body.starrating,
				review_text:req.body.review_text,
                
             })  

             //console.log(Movies);
             const ReviewData= await reviewscoll.save();   
          res.status(201).json(ReviewData);
              
           // }else{
            //    res.status(404);
           //     throw new Error("Movie is already exist");
           // }

    }catch(error){
        console.log(req.body);
        res.status(400).json({message:error.message});
    }
});








export const deleteReview = asyncHandler(async(req,res)=>{
    try{

      

        //console.log(req.body.id);

        //const movie =await Movie.findById(req.body.id);
        const del_Data=await Review.deleteOne({_id:req.params.id});

        //console.log(del_Data);

        if(del_Data){
           
          //send the update moive to the client
          res.status(201).json({ message: "Review has been deleted successfully" });
          //res.status(201).json(updateMovie)

            }else{
                res.status(404);
                throw new Error("Review is not found");
            }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});


export const updateReview = asyncHandler(async(req,res)=>{
    try{

       // const {name,desc,image,titleImage,rate,numberofReviews,catagory,time,language,year,video,casts} = req.body;

        //find movie by id in database

       
        const Reviewtable =await Review.findById(req.params.id);
       
        if(Reviewtable){
            Reviewtable.movie_id = req.body.movie_id || movie.movie_id;
            Reviewtable.user_id=req.body.user_id || movie.user_id;
            Reviewtable.rating=req.body.rating || movie.rating;
			Reviewtable.review_text=req.body.review_text || movie.review_text;
            
          const updateReview = await Reviewtable.save();

          //send the update moive to the client

          res.status(201).json(updateReview)

            }else{
                res.status(404);
                throw new Error("Review is not found");
            }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});

///////////////////////END Review api//////////////////////////////




///////////////////////Comment api//////////////////////////////


export const getallReviewcomment = asyncHandler(async(req,res)=>{
    try{
        
		console.log(req.params.id);
		const commentdata = await Comment.find({'review_id':req.params.id});
        res.json(commentdata);

    }catch(error){
        res.status(400).json({message:error.message})

    }
 })







 
 

export const insertComment = asyncHandler(async(req,res)=>{
    try{

     	    //console.log(req.body);
            const commentcoll= new Comment({
				review_id:req.body.review_id,
                user_id:req.body.user_id,
				comment_text:req.body.comment_text,
                
             })  

             //console.log(Movies);
             const commentData= await commentcoll.save();   
          res.status(201).json(commentData);
              
           // }else{
            //    res.status(404);
           //     throw new Error("Movie is already exist");
           // }

    }catch(error){
        console.log(req.body);
        res.status(400).json({message:error.message});
    }
});








export const deleteComment = asyncHandler(async(req,res)=>{
    try{

      

        console.log(req.body.id);

        //const movie =await Movie.findById(req.body.id);
        const del_Data=await Comment.deleteOne({_id:req.params.id});

        //console.log(del_Data);

        if(del_Data){
           
          //send the update moive to the client
          res.status(201).json({ message: "Comment has been deleted successfully" });
          //res.status(201).json(updateMovie)

            }else{
                res.status(404);
                throw new Error("Comment is not found");
            }

    }catch(error){

        res.status(400).json({message:error.message});
    }
});


