import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";
import axios from "axios";

const deleteHandlar=(id,e)=>{
  //console.log(id);
  
  const shouldRemove = window.confirm("are you sure you want to delete?")

  if (shouldRemove) {
  
      axios
          .delete(`http://localhost:9000/api/movies/movie/${id}`)
          .then((Response)=>
        {  //console.log(Response); 
          window.location.reload();
        
        })
        .catch((error)=>{ console.log(error); })
  
  }


  };
  


const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = (movie, i, admin) => {
  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-borderh-12 rounded overflow-hidden">
          <img
            className="h-full w-full rounded-full object-cover"
            src={movie.videoposter}
            alt={movie?.name}
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{movie.name}</td>
      <td className={`${Text}`}>{movie.contentType}</td>
      <td className={`${Text}`}>{movie.language}</td>
      <td className={`${Text}`}>{movie.cetrificationName}</td>
      <td className={`${Text}`}>{movie.genre}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        {admin ? (
          <>
            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-colo w-6 h-6" onClick={e=>deleteHandlar(movie._id,e)} >
              <MdDelete />
            </button>
          </>
        ) : (
          <>
            {" "}
            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Download <FaCloudDownloadAlt className="text-green-500" />
            </button>
            <Link
              to={`/movie/${movie?.name}`}
              className="bg-subMain text-white rounded flex-colo w-6 h-6"
            >
              <GoEye />
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};

function Table({ data, admin }) {
  return (
    <>
      <div className="overflow-x-scroll overflow-hidden relative w-full">
        <table className="w-full table-auto border border-border divide-y divide-border">
          <thead>
            <tr className="bg-dryGray">
              <th scope="col" className={`${Head}`}>
                Image
              </th>
              <th scope="col" className={`${Head}`}>
                Name
              </th>
              <th scope="col" className={`${Head}`}>
                Category
              </th>
              <th scope="col" className={`${Head}`}>
                Language
              </th>
              <th scope="col" className={`${Head}`}>
              Certification Name
              
              </th>
              <th scope="col" className={`${Head}`}>
               Genre
              </th>
              <th scope="col" className={`${Head} text-end`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-main divide-y divide-gray-800">
            {data.map((movie, i) => Rows(movie, i, admin))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
