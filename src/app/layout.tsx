import type { Metadata } from "next";
import "./globals.css";
import { fontPoppins } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Paw Asa",
  description: "San Pedro Shelter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPoppins.className} antialiased font-medium`}
      >
        {children}
      </body>
    </html> 
  );
}
