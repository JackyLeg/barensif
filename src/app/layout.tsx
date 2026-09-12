import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BARENSIF - Biro Administrasi Perencanaan & Sistem Informasi Universitas Trisakti",
  description:
    "Official website of Biro Administrasi Perencanaan dan Sistem Informasi (BARENSIF) Universitas Trisakti, Jakarta.",
  keywords: ["BARENSIF", "Universitas Trisakti", "Biro Administrasi Perencanaan", "Sistem Informasi", "Trisakti"],
  authors: [{ name: "Universitas Trisakti" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#F8FAFC] text-[#0F172A] selection:bg-[#006BCB] selection:text-white">
        {children}
      </body>
    </html>
  );
}

