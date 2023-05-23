import Link from "next/link";
import { FaChartArea, FaMoneyBillWave } from "react-icons/fa";
import SessionMenu from "../session_menu/session_menu.component";

const SideMenu = () => {
  return (
    <div className="min-h-screen w-48 p-4 bg-black text-white">
      <SessionMenu />
      <div className="mt-4">
        <ul className="flex flex-col items-center gap-2 text-2xl">
          <li>
            <Link href="/" className="self-start flex gap-2 items-center">
              <FaChartArea /> DashBoard
            </Link>
          </li>
          <li>
            <Link
              href="/expenses"
              className="self-start flex gap-2 items-center"
            >
              <FaMoneyBillWave /> Expenses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
