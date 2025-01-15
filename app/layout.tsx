'use client'
import {Amatic_SC} from 'next/font/google';
import {Ranchers} from 'next/font/google';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Metadata } from 'next';
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/autoplay';
import "./globals.css";

config.autoAddCss = false; 

export const headers = Ranchers({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const normal = Amatic_SC({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${normal.className} text-[20px] capitalize bg-secondary-filler-color overflow-x-hidden`}>
        <Nav />
        {children}
        <Footer />
        <Toaster />
        {AOS.init()}
      </body>
    </html>
  );
}
