import express from "express";
import { createMovieReview, getMovieById, getMovies, getRandomMovies, getTopratedMovies, importMovies, updateMovie,insertMovie,updateMovie_old ,deleteMovie} from "../Controllers/MoviesController.js";
import { admin } from "../midddleware/Auth.js";

////image upload  //////////////////////////////


import multer from "multer";

import path from "path";

//console.log(path.join(__dirname,'../../src/assets/videos'));
const storage=multer.diskStorage({

destination:function(req,file,cd)
{
    //console.log(file);
    //console.log('---------------------'+__dirname);
    //console.log(file.fieldname);
    

    process.env.BASE_PATH 

    if(file.fieldname==='certificationFiles')
    {
    cd(null,path.join(process.env.BASE_PATH +'assets/movies/certificationfiles'));
    }
    else if(file.fieldname==='videofile')
    {
        cd(null,path.join(process.env.BASE_PATH+'assets/movies'));   
    } 
    else if(file.fieldname==='videoposter')
    {
        cd(null,path.join(process.env.BASE_PATH+'assets/movies/poster'));       
    }  
},
filename:function(req,file,cd)
{
    const name=Date.now()+'-'+file.originalname;
     //console.log(name);

    cd(null,name);

}

})

const uploade=multer({storage:storage}).fields([{name:'videofile'},{name:'certificationFiles'},{name:'videoposter'}]);





/////end of image upload////////////////////
const router = express.Router();


//**************** PUBLIC ROUTE **************//
router.post("/import",importMovies);
router.get("/",getMovies);
router.get("/:id",getMovieById);
router.get("/rated/top",getTopratedMovies);
router.get("/random/all",getRandomMovies);


router.post("/movie",uploade,insertMovie);

router.put("/movie", uploade ,updateMovie);
router.delete("/movie/:id",deleteMovie);


//**************** PRIVATE ROUTE **************//
router.post("/:id/reviews",createMovieReview);


//**************** PRIVATE ROUTE **************//
router.put("/:id",updateMovie)

 export default router;