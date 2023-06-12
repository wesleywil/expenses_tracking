import Link from "next/link";
import {
  FaChartArea,
  FaMoneyBillWave,
  FaClipboard,
  FaUserAlt,
} from "react-icons/fa";
import SessionMenu from "../session_menu/session_menu.component";

const SideMenu = () => {
  return (
    <div className="min-h-screen w-48 p-4 bg-[#fcfcfc] text-[#2e2b2e]">
      <SessionMenu />
      <div className="mt-4">
        <ul className="flex flex-col items-center gap-2 text-2xl">
          <li className="w-full">
            <Link href="/" className="self-start flex gap-2 items-center">
              <FaChartArea /> <span className="text-xl">DashBoard</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/profile"
              className="self-start flex gap-2 items-center"
            >
              <FaUserAlt /> <span className="text-xl">Profile</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/expenses"
              className="self-start flex gap-2 items-center"
            >
              <FaMoneyBillWave /> <span className="text-xl">Expenses</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/categories"
              className="self-start flex gap-2 items-center"
            >
              <FaClipboard /> <span className="text-xl">Categories</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
