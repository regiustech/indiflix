
import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../Dashboard/SideBar";
import { Listbox, Transition } from "@headlessui/react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import { priceList, movieBuyList } from "./PriceListMenu";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";




const AddMovie = () => {
  const navigate = useNavigate();
  const Language = [
    {title: "<---Select Language--->"},
    {title: "Hindi"},
    {title: "English"},
    {title: "Telugu"},
    {title: "Tamil"},
    {title: "Malayalam"},
    {title: "Kannada"},
    {title: "Marathi"},
    {title: "Punjabi"},
    {title: "Gujarati"},
    {title: "Bangali"}
  ];
  const Genre = [
    { title: "<---Select Genre--->" },
    { title: "Action & Adventure" },
    { title: "Animation" },
    { title: "Anime" },
    { title: "Children & Family" },
    { title: "Classic" },
    { title: "Comedy" },
    { title: "Crime" },
    { title: "Documentary" },
    { title: "Drama" },
    { title: "Fantasy" },
    { title: "Horror" },
    { title: "International" },
    { title: "LGBTQ+" },
    { title: "Music & Musicals" },
    { title: "Mystery" },
    { title: "Romance" },
    { title: "Sci-Fi & Fantasy" },
    { title: "Science & Nature" },
    { title: "Sports" },
    { title: "Stand-Up Comedy" },
    { title: "Thriller" },
    { title: "TV Shows" },
  ];
  const [genre, setGenre] = useState(Genre[0]);
  const [language, setLanguage] = useState(Language[0]);

  const contentType = [
    "Trailer",
    "Movie",
    "Web Series",
    "Documentary",
    "others categories",
    "Genres",
  ];

  const videoQuality = [
    "HD : 720p",
    "Full HD : 1080p",
    "Quad HD : 2k or 1440",
    "Ultra HD (UHD) : 4K or 2160p",
    "Full Ultra HD : 8K or 4320p",
  ];

  const audioQuality = ["Low", "Medium", "High"];
  const langaugeType = ["Yes", "No"];
  const boardType = ["Yes", "No"];
  const buyMoviePermission = ["Yes", "No"];

  const GenreFilter = [{ value: genre, onChange: setGenre, items: Genre }];
  const LanguageFilter = [{ value: language, onChange: setLanguage, items: Language }];

  const selectLangaugeHandler = () => {
    alert("We highly recommend to extend reachability");
  };


    const data={contentType:"",userId:"66091b537d3ff707764047b8",name:"",videoQuality:"",desc:"",audioQuality:"",language:"",inCertified:"",cetrificationName:"",is_buy:"",certificationFiles:"",videofile:"",videoposter:""};
    const [ inputData , setInputdata ]=useState(data)
    const handleData=(e)=>{
     
      if(!e.target.files)
      {
      
      console.log(e.target.value);
        setInputdata({ ...inputData, [e.target.name]:e.target.value })
      //formData.append(e.target.name,e.target.value);
      } 
      else
      {
        setInputdata({ ...inputData,[e.target.name]:e.target.files[0] })
        //formData.append(e.target.name,e.target.files[0]);
        //console.log(e.target.files[0]);
      }  
    }


   

    //blob

    const handleSubmit=(e)=>{


        e.preventDefault();
        
        //const formData=new FormData()
        //formData.append()
        console.log(inputData);

        let axiosConfig = {
          headers: {
            "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
          }
        };
        axios.post(`${process.env.REACT_APP_API_URL}/api/movies/movie`,inputData,axiosConfig).then((Response )=>{
          navigate("/movieslist");
        })
    }
  return (
    <div>
      <SideBar>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold">Add new Movie / Series</h2>
          </div>

          <label>1. Please select the type of Video</label>
          <div className="flex">
            {contentType.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={item}
                  name="contentType"
                  value={item}
                  checked={inputData.contentType === item}
                  onChange={handleData}
                />
                <label htmlFor={item} className="ms-3 me-5">
                  {item}
                </label>
              </div>
            ))}
          </div>
          <div className="flex">
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            type="Hidden"
            name="userId"
            value="66091b537d3ff707764047b8"
          />
         </div>   
 

          <label>Name</label>
          <div className="flex">
          
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            placeholder="Enter Name"
            type="text"
            name="name"
            value={inputData.name}
            onChange={handleData}
            
         
          />



          </div>   


          <label className="mt-4">2. Please select the quality of Video</label>
          <div className="flex">
            {videoQuality.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={item}
                  name="videoQuality"
                  value={item} // Assuming 'value' is the property of the object representing the option
                  checked={inputData.videoQuality === item}
                  onChange={handleData} 
                />
                <label htmlFor={item} className="ms-3 me-5">
                  {item}
                </label>
              </div>
            ))}
          </div>


          <label>Description</label>
          <div className="flex">
          
         
         <textarea
         
         className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            name="desc"
            onChange={handleData} 
         
         >{inputData.desc}</textarea>
          </div>   
      



          <label className="mt-4">3. Please select Audio quality</label>
          <div className="flex">
            {audioQuality.map((item, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={item}
                  name="audioQuality"
                  value={item} // Assuming 'value' is the property of the object representing the option
                  onChange={handleData}
                  checked={inputData.audioQuality === item} 
                />
                <label htmlFor={item} className="ms-3 me-5">
                  {item}
                </label>{" "}
              </div>
            ))}
          </div>

          <label className="mt-4">3. Please select Genre</label>
          {GenreFilter.map((item, index) => (
            <Listbox key={index} value={item.value} onChange={item.onChange}>
              <div className="relative">
                <Listbox.Button className="relative border border-gray-100 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs ">
                  <span className="block truncate">{item.value.title}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                    <FaAngleDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {item.items.map((iterm, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-subMain text-white" : "text-main"}`
                        }
                        value={iterm}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncated ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {iterm.title}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaCheck
                                  className="h-3 w-3"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ))}

          <label className="mt-4">4. Please select the Langauge</label>
          <div className="flex">
          </div>
          {LanguageFilter.map((item, index) => (
            <Listbox key={index} value={item.value} onChange={item.onChange}>
              <div className="relative">
                <Listbox.Button className="relative border border-gray-100 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs ">
                  <span className="block truncate">{item.value.title}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                    <FaAngleDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {item.items.map((iterm, i) => (
                      <Listbox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-subMain text-white" : "text-main"}`
                        }
                        value={iterm}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncated ${
                                selected ? "font-semibold" : "font-normal"
                              }`}
                            >
                              {iterm.title}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaCheck
                                  className="h-3 w-3"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ))}
          <label className="mt-4">5. Is this certified by any board?</label>
          <div className="flex">
            {boardType.map((item, index) => {
              return (
                <div>
                  <input type="radio" id={item} name="inCertified" value={item} 
                  onChange={handleData} 
                  checked={inputData.inCertified === item} 
                  />
                  <label htmlFor="yes" className="ms-3 me-5">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>



          <label>Certification Name</label>
          <div className="flex">
          
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            placeholder="Certification Name"
            type="text"
            name="cetrificationName"
            value={inputData.cetrificationName}
            onChange={handleData}
         
          />
          </div>       

         


          <label>Upload Certification File</label>
          <div className="flex">
          
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            
            type="file"
            name="certificationFiles"
            onChange={handleData}
          />
          </div>             


          {/* code for table 1 */}

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">                  
                  
                </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Content Type
                  </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Duration (mins)
                  </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Resolution
                  </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Price every 3 months
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceList.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                    <input
                    type="radio"
                    name="content_type_duration"
                    value={item["Content Type"]+'|'+item["Duration (mins)"]+'|'+item["Resolution"]+'|'+item["Price every 3 months"]}
                    onChange={handleData}
                    checked={inputData.content_type_duration === item["Content Type"]+'|'+item["Duration (mins)"]+'|'+item["Resolution"]+'|'+item["Price every 3 months"]} 
                  />
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                      {item["Content Type"]}
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                      {item["Duration (mins)"]}
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                      {item["Resolution"]}
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600 text-slate-400">
                      {item["Price every 3 months"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <label className="mt-4">
            6. Do you want to give users options to buy movies?
          </label>
          <div className="flex">
            {boardType.map((item, index) => {
              return (
                <div>
                  <input type="radio" id={item} name="is_buy" value={item}
                  checked={inputData.is_buy === item} 
                  onChange={handleData}
                  />
                  <label htmlFor="yes" className="ms-3 me-5">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>

        
          <label>Upload Video</label>
          <div className="flex">
          
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            
            type="file"
            name="videofile"
            
            onChange={handleData}
          />
          </div>             
    
          <label>Upload Video Poster </label>
          <div className="flex">
          
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            label="text"
            
            type="file"
            name="videoposter"
           
            onChange={handleData}
          />
          </div>  
          <span className="text-sm text-red-900 font-bold">Max width 1280 × 720</span>               
          <span className="text-sm text-red-900 font-bold">File formats allowed: JPEG, JPG, PNG</span>               

          


          {/* code for table 2 */}

          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Content Type
                  </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Resolutions required
                  </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Ticket Price (1 watch)
                  </th>
                  <th className="border border-black px-4 py-2 text-left border-separate border-spacing-2 border border-slate-600 text-black bg-gray-100">
                    Buy
                  </th>
                </tr>
              </thead>
              <tbody>
                {movieBuyList.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                      {item["Movie Type"]}
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                      {item["Resolutions required"]}
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600">
                      {item["Ticket Price (1 watch)"]}
                    </td>
                    <td className="border border-black px-4 py-2 text-left border-separate border-spacing-1 border border-slate-600 text-slate-400">
                      {item["Buy"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            onClick={handleSubmit}
          >
            <FiLogIn />
            Submit
          </Link>     




        </div>
      </SideBar>
    </div>
  );
};

export default AddMovie;
<h1>Hello</h1>;
