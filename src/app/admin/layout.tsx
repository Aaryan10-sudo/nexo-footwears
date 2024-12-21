import type { Metadata } from "next";
import localFont from "next/font/local";
import AdminNavbar from "@/layout/AdminNavbar";
import Sidebar from "@/layout/Sidebar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nexo Footwears",
  description: "Step into fashion with nexo footwears",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdminNavbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
