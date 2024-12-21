"use client";

import { setUserInfo } from "@/redux/infoSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ClientInfo() {
  const token = localStorage.getItem("authToken");
  const dispatch = useDispatch();
  const getUserInfo = async () => {
    try {
      const result = await axios({
        url: `http://localhost:3333/user`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        setUserInfo({
          name: result.data.data.username,
          email: result.data.data.email,
          phoneNumber: result.data.data.phoneNumber,
          image: result.data.data.image,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [token, dispatch]);
  return <></>;
}
