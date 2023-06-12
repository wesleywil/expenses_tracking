import "./globals.css";
import { Inter } from "next/font/google";
import SideMenu from "../components/side_menu/side_menu.component";
import { Providers } from "./provider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import NotSignIn from "@/components/not_signIn/not_signIn.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WW - Expenses Tracking",
  description: "Expenses tracking app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <html lang="en">
        <body className="flex bg-[#2e2b2e]">
          <Providers>
            <SideMenu />
            {children}
          </Providers>
        </body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <body className="flex">
          <Providers>
            <NotSignIn />
          </Providers>
        </body>
      </html>
    );
  }
}
