import express from "express";
import { createMovieReview, getMovieById, getMovies, getRandomMovies, getTopratedMovies, importMovies, updateMovie } from "../Controllers/MoviesController.js";
import { admin } from "../midddleware/Auth.js";

const router = express.Router();


//**************** PUBLIC ROUTE **************//
router.post("/import",importMovies);
router.get("/",getMovies);
router.get("/:id",getMovieById);
router.get("/rated/top",getTopratedMovies);
router.get("/random/all",getRandomMovies);

//**************** PRIVATE ROUTE **************//
router.post("/:id/reviews",createMovieReview);


//**************** PRIVATE ROUTE **************//
router.put("/:id",updateMovie)

 export default router;