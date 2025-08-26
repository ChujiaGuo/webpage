import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import ParticleBackground from "@/components/Particles";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chujia Guo",
    description: "Personal Webpage",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh] flex flex-col`}>
                <Navbar />
                <div className="fixed inset-0 -z-10">
                    <ParticleBackground />
                </div>
                {children}
            </body>
        </html>
    );
}
