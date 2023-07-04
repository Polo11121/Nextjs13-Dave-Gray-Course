import { ReactNode } from "react";
import { Navbar, MyProfilePic } from "@/app/components";
import "./globals.css";

export const metadata = {
  title: "Michał Blog",
  description: "Created by Michał Jasiński",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="dark:bg-slate-800">
      <Navbar />
      <MyProfilePic />
      {children}
    </body>
  </html>
);

export default RootLayout;
