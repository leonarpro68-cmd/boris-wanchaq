import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boris Aguilar | Candidato a la Alcaldía de Wánchaq",
  description:
    "Boris Aguilar, candidato a la alcaldía de Wánchaq, Cusco. Conoce sus propuestas en seguridad, transporte, salud, educación, medio ambiente y desarrollo económico. Súmate al cambio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
