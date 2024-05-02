//import React from "react";
import React, {  useState,useEffect } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Titles from "../Components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../Components/Movie";
import axios from "axios";
function SingleMovie() {
  const { id } = useParams();
 //console.log(id);


 

  const [myData,setMydata]= useState([]);
  useEffect(()=>{
   
   axios.get('http://localhost:5000/api/movies/'+id)
   .then((res )=>setMydata(res.data))


},[]);


 //console.log(myData);
 //console.log('--------------------------------');
  //const movie = Movies.find((movie) => movie.name === id);
  //const RelatedMovies = Movies.filter((m) => m.category === movie.category);
  //console.log(RelatedMovies);
  return (
    <Layout>
      <MovieInfo movie={myData} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        {/* rates */}
        <MovieRates movie={myData} />
        {/* related */}
        {/* <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            
           
              <Movie movie={myData} />
           
          </div>
        </div> */}
      </div>
    </Layout>
  );
}

export default SingleMovie;
