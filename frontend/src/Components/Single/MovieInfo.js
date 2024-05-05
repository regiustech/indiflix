import React,{useState} from "react";
import {Link} from "react-router-dom";
import {FaPlay} from "react-icons/fa";
import {ChevronRightIcon} from "@heroicons/react/outline";
import p2a_img from "../../Data/DuneImage.jpg";
import p3_img from "../../Data/Inception.jpg";
import {PlayIcon} from "@heroicons/react/solid";

function MovieInfo({movie}) {
    const [show,setShow] = useState(false);
    const [showWatchBtn,setShowWatchBtn] = useState(false);
    const [isOpen,setIsOpen] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <div className="relative rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className="mt-2">
                                            <p className="text-base mb-4 font-semibold text-white-500">More Purchase Options</p>
                                            <p className="text-base mt-5 mb-3 font-semibold text-white-500">Rent</p>
                                            <div class="grid grid-cols-3 gap-8">
                                                <div class="">
                                                    <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer" onClick={handleWatchButton}>
                                                        <div className="p-2">
                                                            <p className="text-white font-medium">Rent</p>
                                                            <p className="text-white font-medium">UHD $23.56</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer" onClick={handleWatchButton}>
                                                        <div className="p-2">
                                                            <p className="text-white font-medium">Rent</p>
                                                            <p className="text-white font-medium">UHD $23.56</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer" onClick={handleWatchButton}>
                                                        <div className="p-2">
                                                            <p className="text-white font-medium">Rent</p>
                                                            <p className="text-white font-medium">UHD $23.56</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-base mt-5 mb-3 font-semibold text-white-500">Buy</p>
                                            <div class="grid grid-cols-3 gap-8">
                                                <div class="">
                                                    <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer" onClick={handleWatchButton}>
                                                        <div className="p-2">
                                                            <p className="text-white font-medium">Buy</p>
                                                            <p className="text-white font-medium">UHD $23.56</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer" onClick={handleWatchButton}>
                                                        <div className="p-2">
                                                            <p className="text-white font-medium">Buy</p>
                                                            <p className="text-white font-medium">UHD $23.56</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <div className="rounded-lg overflow-hidden border border-gray-300 bg-gray-500 cursor-pointer" onClick={handleWatchButton}>
                                                        <div className="p-2">
                                                            <p className="text-white font-medium">Buy</p>
                                                            <p className="text-white font-medium">UHD $23.56</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-800">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-red-600 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-full relative text-white mt-8">
                <div className="xl:bg-main bg-dry flex-colo">
                    <div className="container px-3 mx-auto flex-colo py-10 lg:py-20 gap-8">
                        <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
                            <img src={p3_img} alt={movie?.name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex w-full gap-4">
                            <div className="max-w-[300px]">
                                <img src={p3_img} alt={movie?.name} className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold mb-2">{movie?.name}</h1>
                                <div className="flex items-center gap-4 font-medium text-dryGray mb-2">
                                    <div className="flex-colo bg-subMain text-xs px-2 py-1">{movie?.videoQuality}</div>
                                </div>
                                <p className="text-text text-sm leading-7 mb-3">{movie?.desc}</p>
                                {showWatchBtn ? (
                                    <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm w-32">
                                        <Link to={`/watch/${movie?._id}`} className="bg-dry py-4 hover:bg-subMain transitions border-2 border-subMain rounded-full flex-rows gap-2 w-full sm:py-2"><PlayIcon className="h-8 w-8"/>Watch</Link>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-4">
                            <div class="text-left w-full">Available to rent or buy</div>
                            <div class="md:grid grid-cols-12 gap-4 items-center w-full">
                                <div class="flex-colo bg-red-600 text-white-500 px-6 py-2 rounded font-bold cursor-pointer" onClick={() => setIsOpen(true)}>Rent</div>
                                <div class="flex-colo bg-red-600 text-white-500 px-6 py-2 rounded font-bold cursor-pointer" onClick={() => setIsOpen(true)}>Buy</div>
                            </div>
                            <div className="text-left w-full">Rentals included 30 days to start watching this video and 48 hours to finish once started.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieInfo;
