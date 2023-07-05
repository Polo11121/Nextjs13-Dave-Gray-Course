import { ReactNode } from "react";
import { Navbar } from "@/app/components";
import "./globals.css";

export const metadata = {
  title: "Next Todos",
  description: "Created for practice",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="dark:bg-slate-800">
      <Navbar />
      <main className="mx-auto max-w-xl p-4 bg-stone-200 min-h-screen">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
