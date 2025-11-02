"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    "yango",
    "flicks and licks",
    "northern braids bar",
    "rsl",
  ];

  const pricing = [
    { name: "location ads", price: "Adjoa/tee" },
    { name: "event promotion", price: "" },
    { name: "demonstrative ads", price: "service x" },
    { name: "flyer/video posts", price: "service xi" },
    { name: "weekly ads", price: "service xii" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 w-full max-w-md mx-auto px-6 py-8 md:max-w-2xl lg:max-w-4xl">
        {/* TEE Branding */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-[0.2em] text-foreground">
            TEE
          </h1>
        </div>

        {/* Portrait Image with Gradient Overlay - Fixed Container */}
        <div className="mb-6 w-[393px] h-[483px] mx-auto relative overflow-hidden">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Frame-1-1762101450604.png?width=8000&height=8000&resize=contain"
            alt="Adjoa Tee"
            fill
            className="object-cover object-center scale-110"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <Link href="#" className="text-foreground hover:opacity-70 transition-opacity">
            <Twitter size={24} fill="currentColor" />
          </Link>
          <Link href="#" className="text-foreground hover:opacity-70 transition-opacity">
            <Instagram size={24} />
          </Link>
          <Link href="#" className="text-foreground hover:opacity-70 transition-opacity">
            <Youtube size={24} />
          </Link>
          <Link href="#" className="text-foreground hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </Link>
          <Link href="#" className="text-foreground hover:opacity-70 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </Link>
        </div>

        {/* Services List - Single Line */}
        <div className="mb-6 text-center">
          <div className="text-sm text-foreground whitespace-nowrap overflow-x-auto pb-2">
            {services.map((service, index) => (
              <span key={index}>
                {service}
                {index < services.length - 1 && " • "}
              </span>
            ))}
          </div>
        </div>

        {/* Partners Marquee */}
        <div className="mb-8 text-center">
          <p className="text-xs text-foreground/70 mb-1">Partners</p>
          <div className="text-sm text-foreground">
            tech assured
          </div>
        </div>

        {/* Pricing Table */}
        <div className="border border-foreground/30 p-6 mb-8 md:p-8">
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            {pricing.map((item, index) => (
              <div key={index} className="contents">
                <div className="text-left">{item.name}</div>
                <div className="text-right">{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Info */}
        <div className="text-center mb-8">
          <p className="text-sm text-foreground">GH₵ xxxx.xx</p>
        </div>

        {/* Book Tee Button */}
        <div className="flex justify-center mb-8">
          <Link
            href="/book"
            className="px-16 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm"
          >
            Book Tee
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}