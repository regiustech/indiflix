import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { ChevronRightIcon } from "@heroicons/react/outline";
import p2a_img from "../../Data/DuneImage.jpg";
import p3_img from "../../Data/Inception.jpg";
import { PlayIcon } from "@heroicons/react/solid";

function MovieInfo({ movie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showWatchBtn, setShowWatchBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const handleWatchButton = () => {
    setShowWatchBtn(true);
    setIsOpen(false);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
            <div className="fixed inset-0 bg-pink-500 opacity-0"></div>
            <div className="relative   rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {/* <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Modal Title
                    </h3> */}
                    <div className="mt-2">
                      <p className="text-base  mb-4 font-semibold text-white-500">
                        More Purchase Options
                        {/* <span class="close" style={{fontSize:"20px"}}>&times;</span> */}
                      </p>
                      <p className="text-base mt-5 mb-3 font-semibold text-white-500">
                        Rent
                      </p>
                      <div class="grid grid-cols-3 gap-8">
                        <div class="">
                          {" "}
                          <div
                            className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer"
                            onClick={handleWatchButton}
                          >
                            <div className="p-2">
                              <p className="text-white font-medium">Rent</p>
                              <p className="text-white font-medium">
                                UHD $23.56
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          {" "}
                          <div
                            className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer"
                            onClick={handleWatchButton}
                          >
                            <div className="p-2">
                              <p className="text-white font-medium">Rent</p>
                              <p className="text-white font-medium">
                                UHD $23.56
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          {" "}
                          <div
                            className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer"
                            onClick={handleWatchButton}
                          >
                            <div className="p-2">
                              <p className="text-white font-medium">Rent</p>
                              <p className="text-white font-medium">
                                UHD $23.56
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-base mt-5 mb-3 font-semibold text-white-500">
                        Buy
                      </p>
                      <div class="grid grid-cols-3 gap-8">
                        <div class="">
                          {" "}
                          <div
                            className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer"
                            onClick={handleWatchButton}
                          >
                            <div className="p-2">
                              <p className="text-white font-medium">Buy</p>
                              <p className="text-white font-medium">
                                UHD $23.56
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          {" "}
                          <div
                            className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer"
                            onClick={handleWatchButton}
                          >
                            <div className="p-2">
                              <p className="text-white font-medium">Buy</p>
                              <p className="text-white font-medium">
                                UHD $23.56
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          {" "}
                          <div
                            className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer"
                            onClick={handleWatchButton}
                          >
                            <div className="p-2">
                              <p className="text-white font-medium">Rent</p>
                              <p className="text-white font-medium">
                                UHD $23.56
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-800">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-600 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full xl:h-screen relative text-white mt-8">
        <img
          // src={`${movie?.videoposter}`}
          src={p2a_img}
          alt={movie.name}
          className="w-full hidden xl:inline-block h-full object-cover mt-8"
        />

        <div className="xl:bg-main bg-dry flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
          <div className="container px-3 mx-auto  flex-colo py-10 lg:py-20 gap-8">
            <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
              <img
                // src={`${movie?.videoposter}`}
                src={p3_img}
                alt={movie?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 md:grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 flex flex-col gap-10">
                {/* Title */}
                <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                  {movie?.name}
                </h1>
                {/* flex items */}
                <div className="flex items-center gap-4 font-medium text-dryGray">
                  <div className="flex-colo bg-subMain text-xs px-2 py-1">
                    {movie?.videoQuality}
                  </div>
                  {/* <FlexMovieItems movie={movie && movie} /> */}
                </div>
                {/* decription */}
                <p className="text-text text-sm leading-7">{movie?.desc}</p>
                {/* <div className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg"> */}
                {/* share */}

                {/* <div className="col-span-1 flex-colo border-r border-border">
                  <button className="w-10 h-10 flex-colo rounded-lg bg-white bg-opacity-20">
                    <FaShareAlt />
                  </button>
                </div> */}
                {/* language */}
                {/* <div className="col-span-2 flex-colo font-medium text-sm">
                  <p>
                    Language :{""}
                    <span className="ml-2 truncate">{movie?.language}</span>
                  </p>
                </div> */}
                {/* watch button */}
                {showWatchBtn ? (
                  <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                    <Link
                      to={`/watch/${movie?._id}`}
                      className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-4 w-full sm:py-3"
                    >
                      <PlayIcon className="h-5 w-5 ml-2" />
                      Watch
                    </Link>
                  </div>
                ) : null}

                {/* </div> */}
              </div>
              {/* <div className="col-span-2 md:mt-0 mt-2 flex justify-end">
              <button className="md:w-1/4 w-full relative flex-colo bg-subMain hover:bg-transparent border-subMain transitions md:h-64 h-20 rounded font-medium">
                <div className="flex-rows gap-6 text-md uppercase tracking-widest absolute md:rotate-90">
                  Download <FiLogIn className="w-6 h-6" />
                </div>
              </button>
            </div> */}
            </div>

            <div class=" md:grid grid-cols-12 gap-4 items-center">
              <div>Available to rent or buy</div>
            </div>
            <div class=" md:grid grid-cols-12 gap-4 items-center">
              <div
                class="flex-colo bg-red-600 text-white-500 px-6 py-2 rounded font-bold cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                {" "}
                Rent{" "}
              </div>

              <div
                class="flex-colo bg-red-600 text-white-500 px-6 py-2 rounded font-bold cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                {" "}
                Buy{" "}
              </div>

              {/* <div class="bg-black text-subMain px-70 py-5 rounded font-bold" > More Purchase options  </div> */}
            </div>

            <div className="col-span-4 md:grid grid-cols-6 gap-4 fs-6">
              Rentals included 30 days to start watching this video and 48 hours
              to finish once started.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
