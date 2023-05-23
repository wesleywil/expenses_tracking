"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FaDoorOpen, FaSignInAlt } from "react-icons/fa";

const SessionMenu = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="mt-4 flex flex-col items-center gap-4 justify-center">
        <div>
          <img
            src={`${session?.user?.image}`}
            alt={session?.user?.name + " profile picture"}
            className="rounded-full"
          />
        </div>
        <div>
          <button
            onClick={() => signOut()}
            className="px-2 flex gap-2 items-center bg-white text-black rounded"
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
