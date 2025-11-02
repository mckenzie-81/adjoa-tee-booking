"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === "adjoa123") {
      router.push("/admin/bookings");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <main className="flex-1 w-full max-w-md mx-auto px-6 py-8 md:max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-light tracking-wide text-foreground">
            Is this Adjoa?
          </h1>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-card px-6 py-4 text-foreground placeholder:text-foreground/60 focus:outline-none text-sm text-center"
            required
          />
        </form>

        {/* Background decorative image */}
        <div className="absolute bottom-0 right-0 w-64 h-96 opacity-30 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
