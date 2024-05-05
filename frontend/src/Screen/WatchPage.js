import React,{useState,useEffect} from "react";
import Layout from "../Layout/Layout";
import {Link,useParams} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import {FaCloudDownloadAlt,FaHeart} from "react-icons/fa";
import VideoPlayer from 'react-video-js-player';
import axios from "axios";

function WatchPage() {
    let {id} = useParams();
    const [myData,setMydata]= useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/movies/${id}`).then((res) => setMydata(res.data));
    },[]);
    return (
        <Layout>
            <div className="container mx-auto bg-dry p-6 mb-12">
                <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
                    <Link to={`/movie/${myData?._id}`} className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
                        <BiArrowBack/>
                        {myData?.name}
                    </Link>
                    <div className="flex-btn sm:w-auto w-full gap-5">
                        <button className="bg-white hover:text-subMain tranitions bg-opacity-30 text-white rounded px-4 py-3 text-sm"><FaHeart/></button>
                        <button className="bg-subMain flex-rows gap-2 hover:text-main tranitions text-white rounded px-8 font-medium py-3 text-sm"><FaCloudDownloadAlt/>Download</button>
                    </div>
                </div>
            </div>
            <div id="video-container">
                <VideoPlayer
                    src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                    className="custVPlayer"
                    controls={true}
                    autoplay={false}
                    height="600"
                />
            </div>
        </Layout>
    );
}
export default WatchPage;