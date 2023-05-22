import "./globals.css";
import { Inter } from "next/font/google";
import SideMenu from "./components/side_menu/side_menu.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WW - Expenses Tracking",
  description: "Expenses tracking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
