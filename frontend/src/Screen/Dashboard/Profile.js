import React, { useEffect, useRef } from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UsedInputs";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../../store/auth/auth_actions";

function Profile() {
  const { userDetail } = useSelector(store => store.Auth);
  const { register, unregister, handleSubmit, formState: { errors }, watch, setValue } = useForm();
  const profile = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isRegistered = watch("isRegistered");
  const inputClassName = "w-full text-sm mt-2 p-5 border border-border rounded text-white";

  useEffect(() => {
    if (isRegistered === "yes") {
      unregister("note")
    }
    else if (isRegistered === "no") {
      unregister("productionHouseName");
      unregister("productionHouseDocument");
    }
  }, [isRegistered]);

  useEffect(() => {
    if (Object.keys(userDetail).length) {
      for (let key in userDetail) {
        if ([
          "fullName",
          "mobileNumber",
          "adhaarNumber",
          "panNumber",
          "address",
          "isRegistered",
          "productionHouseName",
          "productionHouseDocument",
          "note"
        ].includes(key)) {
          let value = userDetail[key];
          if (key === "isRegistered") {
            value = userDetail[key] ? "yes" : "no";
          }
          setValue(key, value);
        }
      }
    }
  }, [userDetail]);

  const onFileUpload = (file) => {
    profile.current = file;
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    for (let d in data) {
      let value = data[d];
      if (d === "productionHouseDocument") {
        value = data[d][0];
      }
      if (d === "isRegistered") {
        value = isRegistered === "yes";
      }
      formData.append(d, value);
    }
    if (profile.current) {
      formData.append("image", profile.current);
    }
    formData.append("email", userDetail.email);
    dispatch(AuthActions.updateProfile(formData)).then(res => {
      if (res.success) {
        navigate('/');
      }
    });
  }

  return (
    <SideBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Profile</h2>
          <Uploader onUpload={onFileUpload} />

          <div className="text-sm w-full">
            <label className="text-border font-semibold">Full Name</label>
            <input
              placeholder="Full name"
              className={`${inputClassName} bg-main`}
              {...register("fullName", { required: "Please enter full name", maxLength: { value: 50, message: "Name should not be greater than 100 characters" } })}
            />
            {errors?.fullName?.message && <small className="text-textError">{errors?.fullName?.message}</small>}
          </div>

          <div className="text-sm w-full">
            <label className="text-border font-semibold">Email</label>
            <input
              type="email"
              placeholder="Email"
              className={inputClassName}
              value={userDetail.email}
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
            <label className="text-border font-semibold">Adhaar Number</label>
            <input
              placeholder="Adhaar number"
              className={`${inputClassName} bg-main`}
              {...register("adhaarNumber", { pattern: { value: /^[0-9]{12}$/, message: "Please enter valid adhaar card number" } })}
            />
            {errors?.adhaarNumber?.message && <small className="text-textError">{errors?.adhaarNumber?.message}</small>}
          </div>

          <div className="text-sm w-full">
            <label className="text-border font-semibold">PAN Number</label>
            <input
              placeholder="PAN number"
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
              {...register("address", { maxLength: { value: 300, message: "Addres should not be greater than 300 words" } })}
            />
            {errors?.address?.message && <small className="text-textError">{errors?.address?.message}</small>}
          </div>

          <div className="text-sm w-full">
            <label className="text-border font-semibold">is production house registered?</label>
            <div>
              <input
                type="radio"
                value="yes"
                {...register("isRegistered")}
              />
              <label className="text-border font-semibold">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                value="no"
                {...register("isRegistered")}
              />
              <label className="text-border font-semibold">No</label>
            </div>
          </div>

          {isRegistered === "yes" ?
            <>
              <div className="text-sm w-full">
                <label className="text-border font-semibold">Production House Name</label>
                <input
                  placeholder="Production house name"
                  className={`${inputClassName} bg-main`}
                  {...register("productionHouseName", { maxLength: { value: 100, message: "Production name should not be greater than 100 characters" } })}
                />
                {errors?.productionHouseName?.message && <small className="text-textError">{errors?.productionHouseAddress?.message}</small>}
              </div>
              <div className="text-sm w-full">
                <label className="text-border font-semibold">Upload Document</label>
                <input
                  type="file"
                  multiple={false}
                  className={`${inputClassName} bg-main`}
                  {...register("productionHouseDocument")}
                />
              </div>
            </>
            :
            <div className="text-sm w-full">
              <label className="text-border font-semibold">Note</label>
              <textarea
                className={`${inputClassName} bg-main`}
                {...register("note", { maxLength: { value: 300, message: "Note should not be greater than 300 characters" } })}
              />
            </div>
          }

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
