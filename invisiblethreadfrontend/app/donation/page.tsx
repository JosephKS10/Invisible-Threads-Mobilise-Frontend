"use client";

import { useState, useEffect } from "react";
import PaypalButton from "@/components/PaypalButton";

export default function Home() {
  const [amount, setAmount] = useState("");
  const [debouncedAmount, setDebouncedAmount] = useState("");

  // Debounce effect: Updates `debouncedAmount` only after user stops typing for 500ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedAmount(amount);
    }, 500);

    return () => clearTimeout(handler);
  }, [amount]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 bg-neutral-900">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">Support Our Cause ❤️</h1>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
        Your donation helps us keep our mission alive. Every little bit counts!
      </p>

      {/* Input Field */}
      <div className="bg-neutral-800 p-6 rounded-xl shadow-lg w-full max-w-sm">
        <label className="text-sm text-gray-400 mb-2 block">Enter Donation Amount:</label>
        <div className="relative">
          <input
            type="number"
            placeholder="e.g., 10.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 text-white bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none transition-all"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
            AUD
          </span>
        </div>

        {/* PayPal Button (Only updates after user stops typing) */}
        <div className="mt-6 flex justify-center">
          {debouncedAmount && parseFloat(debouncedAmount) > 0 ? (
            <PaypalButton amount={debouncedAmount} />
          ) : (
            <p className="text-red-400 text-sm text-center mt-2">
              Please enter a valid amount.
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-gray-500 text-sm text-center">Thank you for your generosity! 🫶</p>
    </div>
  );
}
