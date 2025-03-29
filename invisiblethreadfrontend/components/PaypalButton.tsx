"use client";

import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    paypal: any;
  }
}

interface PaypalButtonProps {
  amount: string;
}

const PaypalButton: React.FC<PaypalButtonProps> = ({ amount }) => {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [isSdkReady, setIsSdkReady] = useState(false);

  useEffect(() => {
    // Check if PayPal SDK is already loaded
    if (window.paypal) {
      setIsSdkReady(true);
      return;
    }

    // Load PayPal SDK dynamically
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=AUD`;
    script.async = true;
    script.onload = () => setIsSdkReady(true);
    script.onerror = () => console.error("Failed to load PayPal SDK");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isSdkReady && paypalRef.current) {
      window.paypal
        .Buttons({
          style: { layout: "vertical", color: "gold", shape: "pill", label: "donate" },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                { amount: { value: amount, currency_code: "AUD" } }
              ],
            });
          },
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture();
            console.log("Payment successful!", order);
            alert("Thank you for your donation! ❤️");
          },
          onError: (err: any) => console.error("PayPal Checkout error:", err),
        })
        .render(paypalRef.current);
    }
  }, [isSdkReady, amount]);

  return (
    <div className="flex flex-col items-center">
      {!isSdkReady ? (
        <p className="text-yellow-400">Loading PayPal...</p>
      ) : (
        <div ref={paypalRef} />
      )}
    </div>
  );
};

export default PaypalButton;
