"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";

export default function BookPage() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const services = [
    "location ads",
    "event promotion",
    "demonstrative ads",
    "flyer/video posts",
    "weekly ads",
    "service x",
    "service xi",
    "service xii",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, service, phone, description });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 w-full max-w-md mx-auto px-6 py-8 md:max-w-2xl lg:max-w-4xl">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-wide text-foreground">
            book
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-card px-6 py-4 text-foreground placeholder:text-foreground/60 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowServiceDropdown(!showServiceDropdown)}
              className="w-full bg-card px-6 py-4 text-left text-foreground flex items-center justify-between text-sm"
            >
              <span className={service ? "" : "text-foreground/60"}>
                {service || "Service"}
              </span>
              <ChevronDown size={20} className="text-foreground" />
            </button>
            
            {showServiceDropdown && (
              <div className="absolute top-full left-0 right-0 bg-card border border-foreground/20 mt-1 max-h-60 overflow-y-auto z-10">
                {services.map((s, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setService(s);
                      setShowServiceDropdown(false);
                    }}
                    className="w-full px-6 py-3 text-left text-sm text-foreground hover:bg-background/50 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Phone Number Input */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-card px-6 py-4 text-foreground placeholder:text-foreground/60 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Description Textarea */}
          <div>
            <textarea
              placeholder="Short Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              className="w-full bg-card px-6 py-4 text-foreground placeholder:text-foreground/60 focus:outline-none resize-none text-sm"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="px-16 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
