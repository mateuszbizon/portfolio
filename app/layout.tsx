import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  subsets: ["latin"],
  style: "normal",
  weight: ["400", "500", "700"] ,
});

export const metadata: Metadata = {
  title: "Mateusz Bizoń - Portfolio | Web Developer",
  description: "Portfolio of a programmer with experience in creating websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
