"use client";

import { signIn } from "next-auth/react";

import { FaLongArrowAltRight } from "react-icons/fa";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-48 mt-8 mx-auto xl:mx-0 px-2 py-1 flex items-center justify-center gap-4 bg-[#26b3c4] hover:bg-[#26b3c4]/70 text-[#fcfcfc] font-bold rounded-xl"
    >
      Sign In <FaLongArrowAltRight className="hidden xl:block" />
    </button>
  );
};

export default SignInButton;
