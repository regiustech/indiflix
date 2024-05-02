
import React, {  useState,useEffect } from "react";
//import React from "react";
import SideBar from "../SideBar";
import Table from "../../../Components/Table";

//import imageSrc from './assets/movies/poster';

import { Movies } from "../../../Data/MovieData";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//const AddMovie = () => {}

function MoviesList() {
	


  const [myData,setMydata]= useState([]);
   useEffect(()=>{
    
    axios.get('http://localhost:5000/api/movies/random/all' )
    .then((res )=>setMydata(res.data))


},[]);




//console.log(myData);
	
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Movies List</h2>
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
            Delete All
          </button>
        </div>
        <Table data={myData} admin={true} />
      </div>
    </SideBar>
  );
}
export default MoviesList;
