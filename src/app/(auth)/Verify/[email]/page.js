"use client";
import Image from "next/image";
import React, { useState } from "react";
import Heading from "../../../../../Components/Text/Heading";
import AuthButton from "../../../../../Components/Buttons/AuthButton";
import { useParams } from "next/navigation";

import OtpInput from "../../../../../Components/Input/OtpInput";
import { useLanguage } from "@/Context/LanguageContext";
import Text from "../../../../../Components/Text/Text";

const Verify = () => {
  const params = useParams();
  const { t } = useLanguage(); // Load locale messages
  const role = "admin";
  const { email } = params;
  const emails = decodeURIComponent(email);

  const [code, setCode] = useState("");

  const handleOtpChange = (value) => {
    setCode(value); // ✅ correctly captures OTP value from OtpInput
  };

  console.log(code, "kk");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />

        <div className="bg-white border border-[#DADFD8] rounded-3xl shadow-md p-8 w-[320px] md:w-[600px] mt-6">
          <div className="text-center mb-6">
            <Heading text={t("verify.title")} />
            <Text text={t("verify.subtext", { email: emails })} />
          </div>

          <form className="space-y-4 text-left">
            <div>
              <OtpInput length={6} onChange={handleOtpChange} />
            </div>
            <AuthButton
              btnText={t("verify.button")}
              data={{ code, emails, role }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
