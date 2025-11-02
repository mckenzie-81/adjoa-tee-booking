"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { Plus, X } from "lucide-react";

interface Booking {
  id: number;
  name: string;
  service: string;
  servicePrice: string;
  phone: string;
  description: string;
  status: "pending" | "accepted" | "rejected";
}

export default function BookingsPage() {
  const [expandedBooking, setExpandedBooking] = useState<number | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      name: "John Doe",
      service: "location ads",
      servicePrice: "GH₵ 500.00",
      phone: "+233 24 123 4567",
      description: "Looking for a location promotion for my new restaurant in Accra",
      status: "pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      service: "event promotion",
      servicePrice: "GH₵ 750.00",
      phone: "+233 55 987 6543",
      description: "Need promotion for upcoming music festival",
      status: "accepted",
    },
    {
      id: 3,
      name: "Michael Johnson",
      service: "demonstrative ads",
      servicePrice: "GH₵ 600.00",
      phone: "+233 20 456 7890",
      description: "Product demonstration for new tech gadget launch",
      status: "pending",
    },
  ]);

  const toggleExpand = (id: number) => {
    setExpandedBooking(expandedBooking === id ? null : id);
  };

  const handleAccept = (id: number) => {
    setBookings(bookings.map(b => 
      b.id === id ? { ...b, status: "accepted" as const } : b
    ));
  };

  const handleReject = (id: number) => {
    setBookings(bookings.map(b => 
      b.id === id ? { ...b, status: "rejected" as const } : b
    ));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 w-full max-w-md mx-auto px-6 py-8 md:max-w-2xl lg:max-w-4xl">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-light tracking-wide text-foreground">
            bookings
          </h1>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id}>
              {/* Collapsed Card */}
              <div
                className={`bg-card p-6 ${
                  expandedBooking === booking.id ? "mb-0" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {booking.name}
                    </h3>
                    <p className="text-sm text-foreground/70">{booking.service}</p>
                  </div>
                  <button
                    onClick={() => toggleExpand(booking.id)}
                    className="text-foreground"
                  >
                    {expandedBooking === booking.id ? (
                      <X size={24} />
                    ) : (
                      <Plus size={24} />
                    )}
                  </button>
                </div>
              </div>

              {/* Expanded Card */}
              {expandedBooking === booking.id && (
                <div className="bg-card px-6 pb-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-foreground mb-1">
                        <span className="font-medium">Service:</span> {booking.service}
                      </p>
                      <p className="text-sm text-foreground mb-1">
                        <span className="font-medium">Phone Number:</span> {booking.phone}
                      </p>
                      <p className="text-sm text-foreground mb-3">
                        <span className="font-medium">Description:</span> {booking.description}
                      </p>
                    </div>
                    <p className="text-sm text-foreground ml-4">
                      {booking.servicePrice}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  {booking.status === "pending" && (
                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => handleAccept(booking.id)}
                        className="flex-1 bg-[#A8E6A1] text-foreground py-2 text-sm hover:opacity-80 transition-opacity"
                      >
                        accept
                      </button>
                      <button
                        onClick={() => handleReject(booking.id)}
                        className="flex-1 bg-[#E69A9A] text-foreground py-2 text-sm hover:opacity-80 transition-opacity"
                      >
                        reject
                      </button>
                    </div>
                  )}

                  {booking.status === "accepted" && (
                    <div className="pt-2">
                      <div className="bg-[#A8E6A1] text-foreground py-2 text-sm text-center flex items-center justify-center gap-2">
                        accepted
                        <span>✓</span>
                      </div>
                    </div>
                  )}

                  {booking.status === "rejected" && (
                    <div className="pt-2">
                      <div className="bg-[#E69A9A] text-foreground py-2 text-sm text-center">
                        rejected
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
