"use client";

import React, { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Replace these with your Razorpay test keys
const RAZORPAY_KEY_ID = "your_test_key_here";

const RazorpayButton: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number>(0);

  const handlePayment = () => {
    if (donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Convert INR to paise
    const amountInPaise = donationAmount * 100;

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amountInPaise,
      currency: "INR",
      name: "Your Organization",
      description: "Donation for Homeless Support",
      handler: (response: any) => {
        console.log("Payment Success:", response);
        // Add further handling if needed
      },
      prefill: {
        name: "Ayush",
        email: "ayush@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#FFFF00",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="number"
        placeholder="Enter donation amount (INR)"
        className="mb-4 px-4 py-2 border rounded focus:outline-none"
        onChange={(e) => setDonationAmount(parseFloat(e.target.value))}
      />
      <button
        className="bg-[#FFFF00] px-6 py-2 rounded-full text-black font-semibold cursor-pointer hover:opacity-90"
        onClick={handlePayment}
      >
        Donate Now!
      </button>
    </div>
  );
};

export default RazorpayButton;
