import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS with Passage Identity",
  description: "NextJS with Passage Identity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://psg.so/web.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
