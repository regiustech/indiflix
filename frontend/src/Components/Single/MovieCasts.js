import React, { useState } from "react";
import Titles from "../Titles";
import { FaUserFriends } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { UsersData } from "../../Data/MovieData";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
SwiperCore.use([Autoplay]);

function MovieCasts() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="my-12">
        <Titles title="Casts" Icon={FaUserFriends} />
        {/* <div className="mt-10">
          <Swiper
            // autoplay={{
            //   delay: 1000,
            //   // disableOnInteraction: false,
            // }}
            autoplay={autoplayEnabled ? { delay: 3000 } : false}
            className="swiper-container"
            onMouseLeave={handleMouseLeave}
      
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              400: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {UsersData.map((user, i) => (
              <SwiperSlide key={i}
              onMouseEnter={()=>handleMouseEnter}

              >
                <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800 ">
                  <img
                    src={`${user.image}`}
                    alt={user.name}
                    className="w-full h-64 object-cover rounded mb-4"
                  />
                  <p>{user?.fullName}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
        <Slider {...settings} className="me-8">
            {UsersData.map((user, i) => (
            <div>

              <SwiperSlide key={i}>
                <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800 ">
                  <img
                    src={`${user.image}`}
                    alt={user.name}
                    className="w-full h-64 object-cover rounded mb-4"
                  />
                  <p>{user?.fullName}</p>
                </div>
              </SwiperSlide>
              </div>

            ))}
        </Slider>
      </div>
    </>
  );
}

export default MovieCasts;
