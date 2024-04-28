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
  description: "Portfolio programisty z doświadczeniem w tworzeniu stron internetowych i aplikacji webowych",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
