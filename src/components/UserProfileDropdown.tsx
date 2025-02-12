"use client";
import { logout } from "@/redux/authSlice";
import { RootState } from "@/store/store";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserProfileDropdown = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(false);

  const userInfo = useSelector((state: RootState) => state.info);
  const signout = () => {
    localStorage.removeItem("authToken");
    dispatch(logout());
    signOut();
  };
  return (
    <>
      <div
        className="h-7 w-7 rounded-full bg-gray-500 hidden sm:block cursor-pointer overflow-hidden"
        onClick={(e) => {
          setProfile(!profile);
        }}
      >
        <img src={userInfo.image} className="h-full w-full " />
      </div>
      {profile ? (
        <div className="absolute top-[50px] bg-white shadow-xl rounded-md h-[320px] w-[250px] right-0 mx-0">
          <div className="h-[100px] w-full bg-violet-600 rounded-none rounded-tl-lg rounded-tr-lg flex justify-center ">
            <div className="h-16 w-16 bg-gray-500 absolute rounded-full top-[70px] overflow-hidden object-cover object-center">
              <img src={userInfo.image} className="w-full h-full" />
            </div>
          </div>
          <br />
          <p className="text-center my-5">Hi {userInfo.name}</p>
          <div className="flex justify-center gap-5 px-[10px] text-[10px]">
            <p>{userInfo.email}</p>
            <p>{userInfo.phoneNumber}</p>
          </div>
          <br />

          <div className=" text-[13px] flex justify-center items-center h-[30px]  cursor-pointer border border-white border-b-black">
            Update Profile
          </div>
          <div className=" text-[13px] flex justify-center items-center h-[30px] border border-white border-b-black cursor-pointer">
            Change Password
          </div>
          <p
            className="text-center text-red-700 my-[10px] text-[13px] cursor-pointer"
            onClick={() => {
              signout();
            }}
          >
            Log Out
          </p>
        </div>
      ) : null}
    </>
  );
};

export default UserProfileDropdown;
