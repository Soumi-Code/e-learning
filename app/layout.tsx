import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Space_Grotesk({
  weight: ["300", "400", "500","600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Learning Management System",
  description: "E-learning website using next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
     className="hydrated">
      <body
        className={font.className}
      >
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
