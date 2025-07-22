"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "../Loader";
import Cookies from "js-cookie";

const AuthButton = ({ btnText, data }) => {
  const path = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault(); // prevent default form submission

    if (path === "/ForgotPassword") {
      try {
        setLoading(true);
        const request = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/authentication/forgotPassword`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const info = request.data;
        toast.success(info.message);
        router.push(`/Verify/${encodeURIComponent(data.email)}`);
        setLoading(false);
        return;
      } catch (error) {
        toast.error(error?.response?.data?.error || "Something went wrong.");
        setLoading(false);
        return;
      }
    } else if (path === "/Login") {
      try {
        setLoading(true);
        const request = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/authentication/login`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const info = request.data;
        console.log(info);

        toast.success(info.message || "Logged in successfully");
        // You can redirect here if needed
        console.log(info.token);
        // localStorage.setItem("token", info.token);
        // localStorage.setItem("userData", JSON.stringify(info.userData));

        Cookies.set("token", info.token, { expires: 7 }); // expires in 7 days
        Cookies.set("userData", JSON.stringify(info.userData), { expires: 7 });
        router.push("/HomeScreen");
        setLoading(false);
        return;
      } catch (error) {
        toast.error(error?.response?.data?.error || "Login failed.");
        setLoading(false);
        return;
      }
    } else if (path.startsWith("/Verify")) {
      try {
        setLoading(true);
        const request = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/authentication/otpVerification`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const info = request.data;

        toast.success(info.message || "OTP Verified");
        console.log(data.emails, "data");
        router.push(`/ResetPassword/${encodeURIComponent(data.emails)}`);
        setLoading(false);
        return;
      } catch (error) {
        toast.error(
          error?.response?.data?.message || "OTP verification failed."
        );
        setLoading(false);
        return;
      }
    } else if (path.startsWith("/Reset")) {
      try {
        setLoading(true);
        const request = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/authentication/resetPassword`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const info = request.data;
        console.log("Password Reset:", info);
        toast.success(info.message || "Password Reset Successful");
        setLoading(false);
        router.push("/Login");

        return;
      } catch (error) {
        toast.error(error?.response?.data?.error);
        setLoading(false);
        return;
      }
    }

    try {
      const request = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/authentication/otpVerification`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const info = request.data;

      toast.success(info.message || "OTP Verified");
      router.push(`/ResetPassword/${encodeURIComponent(data.email)}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || "OTP verification failed.");
    }
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleClick}
        className="w-full bg-[var(--orange)] text-white font-semibold py-2 rounded-2xl transition cursor-pointer"
      >
        {btnText}
      </button>
      {loading && <Loader />}
    </div>
  );
};

export default AuthButton;
