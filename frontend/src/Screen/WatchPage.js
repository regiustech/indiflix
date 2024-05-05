import React, { useState,useEffect, useRef } from "react";
import Layout from "../Layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart, FaPlay } from "react-icons/fa";
import VideoPlayer from 'react-video-js-player';

import axios from "axios";
function WatchPage() {
  let { id } = useParams();
  
  const [myData,setMydata]= useState([]);
  useEffect(()=>{
   axios.get(`${process.env.REACT_APP_API_URL}/api/movies/${id}`)
   .then((res )=>setMydata(res.data))

  },[]);
  const [showVideo, setShowVideo] = useState(true);

  //const movie = Movies.find((movie) => movie.name === id);
  const [play, setPlay] = useState(false);
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
          <Link
            to={`/movie/${myData?._id}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack />
            {myData?.name}
          </Link>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain tranitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>
            <button className="bg-subMain flex-rows gap-2 hover:text-main tranitions text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt />
              Download
            </button>
          </div>
        </div>
      </div>
      {/* watch video */}
      {/* {play ? (
        <video controls autoPlay={play} className="w-full h-full rounded">
          <source src={myData?.videofile} type="video/mp4" title={myData?.name} />
        </video>
      ) : (
        <div className="w-full h-screen rounded-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo">
            <button
              onClick={() => setPlay(true)}
              className="bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl"
            >
              <FaPlay />
            </button>
          </div>
          <img
            src={myData?.videoposter ? `${myData.videoposter}` : "images/user.png"}
            alt={myData?.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )} */}
   
{/*        
      <div id="incorrect-id">
        <VideoPlayer
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        poster="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.jpg" // Actual poster URL
          id="my-video-player"
          controls={true}
          autoplay={false}
        />
        
      </div> */}
      <div id="video-container">
      <VideoPlayer
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        id="my-video-player"
        controls={true}
        autoplay={false}
      />
    </div>
    </Layout>
  );
}

export default WatchPage;
