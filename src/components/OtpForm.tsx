"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { generateOtp } from "../lib/otp-generator";

export function OtpForm() {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Generate a dummy OTP when the component mounts
    const newOtp = generateOtp();
    setGeneratedOtp(newOtp);

    // In a real app, this would be sent to the user's phone
    console.log(`Your OTP is: ${newOtp}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (otp === generatedOtp) {
      setSuccess(true);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  if (success) {
    return (
      <div className="rounded-md bg-green-50 p-4 text-center">
        <p className="text-green-800">Login successful!</p>
        <p className="mt-2 text-sm text-green-600">You are now logged in.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="ENTER OTP"
          className="text-center rounded-[10px]"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          required
        />
      </div>

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      <Button
        type="submit"
        className="w-full bg-[#E32213] hover:bg-red-700 text-white cursor-pointer"
      >
        Login
      </Button>
    </form>
  );
}
