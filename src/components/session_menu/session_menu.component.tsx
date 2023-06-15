"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaDoorOpen, FaSignInAlt } from "react-icons/fa";
import LoadingSession from "../loading_session/loading_session.component";

const SessionMenu = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <LoadingSession />;
  } else if (status === "authenticated") {
    return (
      <div className="mt-4 flex flex-col items-center gap-4 justify-center">
        <div>
          <Image
            width={100}
            height={100}
            src={`${session?.user?.image}`}
            alt={session?.user.name + " profile picture"}
            className="rounded-full"
          />
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className="px-2 flex gap-2 items-center bg-[#26b3c4] hover:bg-[#26b3c4]/70 text-[#fcfcfc] hover:text-slate-600 font-bold rounded"
          >
            <FaDoorOpen />
            SignOut
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-4 flex flex-col items-center gap-4 justify-center">
        <div className="w-24 h-24 mx-auto bg-white rounded-full"></div>
        <div>
          <button
            onClick={() => signIn("google")}
            className="px-2 flex gap-2 items-center bg-white text-black rounded"
          >
            <FaSignInAlt />
            SignIn
          </button>
        </div>
      </div>
    );
  }
};

export default SessionMenu;
