import React, { useState,useEffect } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "../UsedInputs";
import Rating from "../Stars";
import { useParams } from "react-router-dom";
import { UsersData } from "../../Data/MovieData";
import axios from "axios";

function MovieRates({ movie }) {

  const { id } = useParams();

  
  const [starrating,setRate]=React.useState();
  const [mesreview_text ,setMessage]=React.useState();

  const data={message:'',userId:"66091b537d3ff707764047b8",movie_id:'',rate:0};
  const [ inputData , setInputdata ]=useState(data)
  const handleData=(e)=>{
   
   
    
    
   
   // alert(e.target.name);
   // alert(e.target.value);
    //var ratedata= e.target.value;
    
    if(e.target.name=='')
    {
     var star=e.target.value;
     //alert(e.target.value);

  
    }
    else if(e.target.name=='message')
    {
     var mess=e.target.value;

    }
    setInputdata({ 
      movie_id:movie._id,
      review_text:'',
      user_id:'66091b537d3ff707764047b8',
      rating:''
     
    });
   // setInputdata({ ...inputData, [e.target.name]:e.target.value });
    
    
    //formData.append(e.target.name,e.target.value);
    
   
    

  }


 
  const handleSubmit=(e)=>{

  
      e.preventDefault();
      var movie_id=id;
      var user_id='66091b537d3ff707764047b8';
      //console.log(JSON.stringify({starrating,mesreview_text,movie_id, user_id}));
      // console.log(inputData); 

       var employee = {
        "starrating": starrating,
        "review_text": mesreview_text,
        "movie_id":movie_id,
        "user_id":user_id
      }

      //console.log(employee); 


      axios.post('http://localhost:5000/api/review', employee )
      .then((Response )=>{

     
       
      })
     //const navigate = useNavigate();
      

  }




  const [myData,setMydata]= useState([]);
  useEffect(()=>{
    //alert(movie._id);
   axios.get('http://localhost:5000/api/review/'+id )
   .then((res )=>setMydata(res.data))
},[]);





  const Ratings = [
    {
      title: "0 - Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - Very Good",
      value: 3,
    },
    {
      title: "4 - Excellent",
      value: 4,
    },
    {
      title: "5 - Masterpiece",
      value: 5,
    },
  ];

  const [rating, setRating] = useState();
  return (
    <>
      <div className="my-12">
        <Titles title="Reviews" Icon={BsBookmarkStarFill} />
        <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
          {/* write review */}
          <div className="xl:col-span-2 w-full flex flex-col gap-8">
            <h3 className="text-xl text-text font-semibold">
              Review "{movie?.name}
            </h3>
            <p className="text-sm leading-7 font-medium text-border">
              Write a review for this movie. It will be posted on this page.
              Write a review for this movie. It will be posted on this page.
            </p>
            <div className="text-sm w-full">
              <Select
                label="Select Rating"
                options={Ratings}
                name="name"
                onChange={(e)=>{ setRate(e.target.value) }}
              />
              <div className="flex mt-4 text-lg gap-2 text-star">
                <Rating value={rating} />
              </div>
            </div>
            {/* Message */}
          
              
          <input
            className="w-full text-sm mt-2 p-5 border border-border rounded text-white bg-main"
            type="text"
            name="movie_id"
            value={movie?._id}
           
          />



            <textarea class="w-full h-40 mt-2 p-6 bg-main border border-border rounded"  onChange={(e)=>{ setMessage(e.target.value) }} name="message" placeholder="Make it short and sweet...">
            {inputData.message}
            </textarea>

            {/* submit */}
            <button className="bg-subMain text-white py-3 w-full flex-colo rounded" onClick={handleSubmit} >
              Submit
            </button>
          </div>
          {/* REVIWERS */}
          <div className="col-span-3 flex flex-col gap-6">
            <h3 className="text-xl text-text font-semibold">Reviews (56)</h3>
            <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
              {myData.map((review, i) => (
                <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                  <div className="col-span-2 bg-main hidden md:block">
                    
                  </div>
                  <div className="col-span-7 flex flex-col gap-2">
                    <h2>{review?.user_id}</h2>
                    <p className="text-xs leading-6 font-medium text-text">
                      {review?.review_text}
                    </p>
                  </div>
                  {/* rates */}
                  <div className="col-span-3 flex-rows border-l border=border text-xs gap-1 text-star">
                    <Rating value={review?.rating} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieRates;
