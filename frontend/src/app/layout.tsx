import type { Metadata } from "next";
import { Kode_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/ThemeProvider";

const KodeMono = Kode_Mono({
  variable: "--font-kode-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App using Zustand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${KodeMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider
>
      </body>
    </html>
  );
}
