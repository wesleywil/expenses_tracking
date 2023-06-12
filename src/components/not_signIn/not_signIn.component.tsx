"use server";

import SignInButton from "../signIn_button/signIn_button.component";

const NotSignIn = () => {
  return (
    <div className="w-screen h-screen bg-[#2e2b2e] text-[#fcfcfc] flex flex-col-reverse xl:flex-row items-center justify-center text-center xl:text-left gap-8">
      <div className="xl:w-1/3 p-4 flex flex-col ">
        <h3 className="font-semibold text-sm">Be Smart</h3>
        <h1 className="font-bold text-5xl">
          Track and Manage Your Expenses with Ease.
        </h1>
        <SignInButton />
      </div>
      <div className="w-96 h-96 bg-black rounded"></div>
    </div>
  );
};

export default NotSignIn;
