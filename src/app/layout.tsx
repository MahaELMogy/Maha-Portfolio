import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import { ProjectsProvider } from "./_components/context/ProjectsContext";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"], // الأوزان اللي هتستخدميها
  variable: "--font-poppins", // نعرفه كـ CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="maha_mounir_logo.svg" />
        <title>Maha Mounir Portfolio</title>
      </head>
      <body className="mt-20">
        <Navbar />
        <ProjectsProvider>
          <div className={poppins.variable}>{children}</div>
        </ProjectsProvider>
        <Footer />
      </body>
    </html>
  );
}
