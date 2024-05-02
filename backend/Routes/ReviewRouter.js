import express from "express";
import { getallReview,getReviewById,insertReview,deleteReview,updateReview,insertComment,deleteComment,getallReviewcomment} from "../Controllers/ReviewsController.js";
import { admin } from "../midddleware/Auth.js";

////image upload  //////////////////////////////





/////end of image upload////////////////////
const router = express.Router();


//**************** PUBLIC ROUTE **************//
//router.post("/import",importMovies);
//////////////Review///////////
router.get("/all",getallReview);
router.get("/:id",getReviewById);
router.post("/",insertReview);
router.put("/:id", updateReview);

router.delete("/:id",deleteReview);
//////////////Review///////////
router.post("/comment",insertComment);
router.delete("/comment/:id",deleteComment);
router.get("/comment/:id",getallReviewcomment);
//////////////Comment///////////

/*
router.get("/",getMovies);
router.get("/:id",getMovieById);
router.get("/rated/top",getTopratedMovies);
router.get("/random/all",getRandomMovies);


router.post("/movie",uploade,insertMovie);
router.put("/movie", uploade ,updateMovie);
router.delete("/movie/:id",deleteMovie);

*/
//**************** PRIVATE ROUTE **************//
//router.post("/:id/reviews",createMovieReview);


//**************** PRIVATE ROUTE **************//
//router.put("/:id",updateMovie)

 export default router;