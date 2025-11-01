import "@/styles/globals.css";
import "@/styles/container.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import HeaderWithScroll from "@/components/layout/header-with-scroll";
import metaData from "@/config/meta-data";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: metaData.title,
  description: metaData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Toaster position="top-right" />

        <ThemeProvider>
          <div className="fixed top-0 w-full z-10">
            <div className="container">
              <HeaderWithScroll />
            </div>
          </div>

          {children}

          <div className="container">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
