// import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Input } from "../UsedInputs";
import { HiPlusCircle } from "react-icons/hi";
// import * as React from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";

function MainModal({ open, handleClose, handleClickOpen, category }) {
  const cancelButtonRef = useRef();
  return (
    <>
      {/* <Transition show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto text-center"
          onClose={handleClose}
          initialFocus={cancelButtonRef}
        >
          <div className="min-h-screen px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
                <h2 className="text-3xl font-bold">
                  {category ? "update" : "Create"}
                </h2>
                <form className="flex flex-col gap-6 text-left mt-6">
                  <Input
                    label="Category Name"
                    placeholder={category ? category.title : "Actions"}
                    type="text"
                    bg={false}
                  />
                  <button
                    onClick={handleClose}
                    className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
                  >
                    {category ? (
                      "Update"
                    ) : (
                      <>
                        <HiPlusCircle /> Add
                      </>
                    )}
                  </button>
                </form>
                <div className="absolute right-5 top-5">
                  <button
                    onClick={handleClose}
                    type="button"
                    className=" transitions w-10 h-10 flex-colo text-base  text-subMain bg-white rounded-full hover:bg-subMain hover:text-white"
                  >
                    <IoClose />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition> */}
      <React.Fragment>
        <Dialog
          // className="fixed inset-0 z-30 overflow-y-auto text-center "
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;

              handleClose();
            },
          }}
        >
          <div className="inline-block border border-border w-full align-middle p-10 overflow-y-auto h-full bg-main text-white ">
            <h2 className="text-3xl font-bold">
              {category ? "Update" : "Create"}
            </h2>
            <form className="flex flex-col gap-6 text-left mt-6">
              <Input
                label="Category Name"
                placeholder={category ? category.title : "Actions"}
                type="text"
                bg={false}
              />
              <button
                onClick={handleClose}
                className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
              >
                {category ? (
                  "Update"
                ) : (
                  <>
                    <HiPlusCircle /> Add
                  </>
                )}
              </button>
            </form>
            <div className="absolute right-5 top-5">
              <button
                onClick={handleClose}
                type="button"
                className=" transitions w-10 h-10 flex-colo text-base  text-subMain bg-white rounded-full hover:bg-subMain hover:text-white"
              >
                <IoClose />
              </button>
            </div>
          </div>
          {/* <div className="  border border-border  w-full  p-10 overflow-y-auto h-full bg-main text-white ">
            <DialogTitle className="text-3xl font-bold">
              {category ? "Update" : "Create"}
            </DialogTitle>
            <DialogContent>
              {/* <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label={category ? category.title : "Actions"}
                type="email"
                fullWidth
                variant="standard"
                className="text-white"
              /> */}
          {/* <Input
                label="Category Name"
                placeholder={category ? category.title : "Actions"}
                type="text"
                bg={false}
              />
            </DialogContent>
            <DialogActions>
              <button
                onClick={handleClose}
                className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
              >
                {category ? (
                  "Update"
                ) : (
                  <>
                    <HiPlusCircle /> Add
                  </>
                )}
              </button>
            </DialogActions>
          </div> */}
        </Dialog>
      </React.Fragment>
    </>
  );
}
export default MainModal;
