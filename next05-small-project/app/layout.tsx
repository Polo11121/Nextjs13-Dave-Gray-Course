import { Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "WikiRocket!",
  description: "WikiRocket! is a wiki for rocketry and spaceflight.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="bg-slate-800">
      <Navbar />
      {children}
    </body>
  </html>
);

export default RootLayout;
