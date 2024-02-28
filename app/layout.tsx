import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TYX's Portfolio",
  description: "This is Teng Yuxuan's portfolio",
  icons:"rel: 'icon', url: '@/app/favicon.ico'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ja">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarBackground/>
        <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  );
}
