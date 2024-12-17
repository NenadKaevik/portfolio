import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import "primeicons/primeicons.css";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Adjust if other weights are needed
});

export const metadata: Metadata = {
  title: "Nenad Kaevik",
  description: "Web Developer & Creative Artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${lexend.className} bg-white dark:bg-black text-black dark:text-white antialiased`}
      >
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <div className="container mx-auto flex flex-col min-h-screen p-4 sm:p-8">
            <Header />
            <PageWrapper>{children}</PageWrapper>
            <Footer />
          </div>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
