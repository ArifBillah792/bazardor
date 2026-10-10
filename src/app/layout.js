import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bangla = Hind_Siliguri({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "বাজার দর | BazarDor",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      data-theme="bazardor"
      className={`${bangla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100">
        {/* Navbar + Ticker ekhane boshbe (Phase 1) */}
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* Footer ekhane boshbe (Phase 1) */}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
