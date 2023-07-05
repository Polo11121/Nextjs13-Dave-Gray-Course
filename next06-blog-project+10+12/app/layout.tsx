import { ReactNode } from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michał Blog",
  description: "Created by Michał Jasiński",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="dark:bg-slate-800">
      <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
