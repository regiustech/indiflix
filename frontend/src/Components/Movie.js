import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import p2a_img from "../Data/DuneImage.jpg";

function Movie({ movie }) {
  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
        <Link to={`/movie/6617c59db6374d2a6607c24f`} className="w-full">
        {/* <Link to={`/movie/${movie?._id}`} className="w-full"> */}

          <img
            src={p2a_img}
            alt={movie?.name}
            className="w-full h-64 object-cover"
          />
        </Link>
        <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
          <h3 className="font-semibold truncate ">Rent Or Buy</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-subMain rounded-md bg-subMain text-white">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
}

export default Movie;
