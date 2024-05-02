import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlusCircle } from "react-icons/hi";
import Table2 from "../../../Components/Table2";
import { CategoriesData } from "../../../Data/CategoriesData";

import MainModal from "../../../Components/Modals/MainModal";
import FormDialog from "../../../Components/Modals/MainModal";

function Categories() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState();

  const handleCLickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onEditFunction = (id) => {
    setCategory(id);
    setOpen(!open);
  };
  useEffect(() => {
    if (open === false) {
      setCategory();
    }
  }, [open]);

  return (
    <SideBar>
      <MainModal
        open={open}
        handleClose={handleClose}
        handleCLickOpen={handleCLickOpen}
        category={category}
      />
      <FormDialog />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            onClick={handleCLickOpen}
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        <Table2
          data={CategoriesData}
          users={false}
          onEditFunction={onEditFunction}
        />
      </div>
    </SideBar>
  );
}
export default Categories;
