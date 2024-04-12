import React from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UsedInputs";
import { useForm } from "react-hook-form";

function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const inputClassName = "w-full text-sm mt-2 p-5 border border-border rounded text-white";

  const onFileUpload = (file) => {
    console.log({file});
  };

  return (
    <SideBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Profile</h2>
          <Uploader onUpload={onFileUpload}/>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Full Name</label>
            <input
              placeholder="Full name"
              className={`${inputClassName} bg-main`}
              {...register("fullName", { required: "Please enter full name" })}
            />
            {errors?.fullName?.message && <small className="text-textError">{errors?.fullName?.message}</small>}
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className={inputClassName}
              disabled
            />
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Mobile Number</label>
            <input
              placeholder="Mobile number"
              className={`${inputClassName} bg-main`}
              {...register("mobileNumber", { pattern: { value: /^[0-9]{10}$/, message: "Please enter valid 10 digit mobile number" } })}
            />
            {errors?.mobileNumber?.message && <small className="text-textError">{errors?.mobileNumber?.message}</small>}
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Adhaar Card Number</label>
            <input
              placeholder="Adhaar card number"
              className={`${inputClassName} bg-main`}
              {...register("adhaarNumber", { pattern: { value: /^[0-9]{12}$/, message: "Please enter valid adhaar card number" } })}
            />
            {errors?.adhaarNumber?.message && <small className="text-textError">{errors?.adhaarNumber?.message}</small>}
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">PAN Card Number</label>
            <input
              placeholder="PAN card number"
              className={`${inputClassName} bg-main`}
              {...register("panNumber", { pattern: { value: /^[0-9a-zA-Z]{10}$/, message: "Please enter valid 10 digit pan card number" } })}
            />
            {errors?.panNumber?.message && <small className="text-textError">{errors?.panNumber?.message}</small>}
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Address</label>
            <textarea
              placeholder="Address"
              className={`${inputClassName} bg-main`}
              {...register("address", { maxLength: { value: 300, message: "Addres should not be greater than 300" } })}
            />
            {errors?.address?.message && <small className="text-textError">{errors?.address?.message}</small>}
          </div>
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Production House Name</label>
            <input
              placeholder="Production house name"
              className={`${inputClassName} bg-main`}
              {...register("productionHouseAddress", { maxLength: { value: 100, message: "Addres should not be greater than 100" } })}
            />
            {errors?.productionHouseAddress?.message && <small className="text-textError">{errors?.productionHouseAddress?.message}</small>}
          </div>
          <div className="flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
            <button className="bg-subMain transitions hover:bg-main border border-subMain font-medium text-white py-3 px-6 rounded w-full sm:w-auto">
              Delete Account
            </button>
            <button
              className="bg-main transitions hover:bg-subMain border border-subMain font-medium text-white py-3 px-6 rounded w-full sm:w-auto"
              type="submit"
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </SideBar>
  );
}
export default Profile;
