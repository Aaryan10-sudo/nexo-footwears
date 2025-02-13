"use client";

import { login } from "@/redux/authSlice";
import { useOAuthMutation } from "@/services/oauthService";
import Google from "@/ui/Google";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoogleSignIn = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const username = session?.user?.name;
  const image = session?.user?.image;
  const [oauth] = useOAuthMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!email || !username) return;

    const data = { email, username, image };
    try {
      const result = await oauth(data);
      const token = result.data.token;
      if (token) {
        dispatch(login(token));
        toast.success(result.data.message);
        localStorage.setItem("token", token);
        router.push("/");
        window.location.reload();
      }
    } catch (error) {
      toast.error("OAuth sign-in failed.");
    }
  };

  useEffect(() => {
    if (session) {
      handleSubmit();
    }
  }, []);

  return (
    <div>
      {session ? (
        <button
          onClick={() => signOut()}
          className="flex p-3 shadow-sm justify-center items-center w-full text-center rounded-sm font-bold gap-5 bg-red-500 text-white"
        >
          Logged In...
        </button>
      ) : (
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex p-3 justify-center items-center w-full text-center rounded-sm font-bold gap-5 text-black"
        >
          <Google />
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default GoogleSignIn;
