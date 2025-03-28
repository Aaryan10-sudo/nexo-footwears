"use client";

import { baseUrl } from "@/config/config";
import { setUserInfo } from "@/redux/infoSlice";
import { RootState } from "@/store/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ClientInfo() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);

  const getUserInfo = async () => {
    try {
      const result = await axios({
        url: `${baseUrl}/user`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(
        setUserInfo({
          name: result.data.data[0].username,
          email: result.data.data[0].email,
          phoneNumber: result.data.data[0].phonenumber,
          image: result.data.data[0].image,
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
