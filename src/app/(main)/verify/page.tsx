"use client";

import { baseUrl } from "@/config/config";
// import AnimatedMail from "@/components/AnimatedMail";
import Warning from "@/ui/Warning";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const query = useSearchParams();
  const [isValid, setValid] = useState(false);

  const token = query.get("token");

  const verifyUser = async () => {
    try {
      const result = await axios({
        url: `${baseUrl}/verify/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setValid(true);
    } catch (error) {}
  };

  useEffect(() => {
    verifyUser();

    const timeout = setTimeout(() => {
      if (isValid) {
        router.push("/log-in");
      } else {
        router.push("/sign-up");
      }
    }, 7000);

    return () => clearTimeout(timeout);
  }, [isValid]);

  return (
    <>
      {isValid ? (
        <div className="h-screen flex flex-col justify-center items-center">
          {/* <AnimatedMail /> */}
          <h1 className="font-bold">Email verified successfully !!!</h1>
          <p className="text-center">You'll be redirected to log-in page.</p>
          <p className="text-center">
            Please enter your credentials and continue access to Nexo Footwears
          </p>
        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center">
          <Warning />
          <h1 className="font-bold">Oops! E-mail verification failed </h1>
          <p className="text-center">
            Looks like the token is invalid please use valid token. Or, please
            sign-up your account again.{" "}
          </p>
          <p className="text-center">You'll be redirected to sign up page</p>
        </div>
      )}
    </>
  );
}
