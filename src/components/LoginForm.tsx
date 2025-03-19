"use client";

import type React from "react";

import { useState } from "react";
import { useNavigate } from "react-router";
import { User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
// import { dummyCustomers } from "../lib/dummy-data";

export function LoginForm() {
  const [customerID, setCustomerID] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://bank-app-login.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ customerID }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Store user data in sessionStorage or localStorage
        sessionStorage.setItem("currentCustomer", JSON.stringify(data.user));
        sessionStorage.setItem("token", data.token); // Store token for authentication

        navigate("/verify-otp"); // Redirect to OTP verification page
      } else {
        setError(data.msg); // Show error message
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <User className="h-4 w-4 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="ENTER CUSTOMER ID"
          className="pl-10"
          value={customerID}
          onChange={(e) => setCustomerID(e.target.value)}
          required
        />
      </div>

      {error && (
        <p className="mb-4 text-sm text-[#E32213] font-bold bg-[#FBE8E7] p-2 rounded-md">
          {error}
        </p>
      )}

      <Button
        type="submit"
        className="w-full bg-[#E32213] hover:bg-red-700 text-white cursor-pointer"
      >
        Continue
      </Button>
    </form>
  );
}
