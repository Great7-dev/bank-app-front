"use client"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { OtpForm } from "../components/OtpForm";
import logo from "../assets/logo.png";
import { OtpHelpDialog } from "../components/otp-help-dialog";

export default function VerifyOtpPage() {
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Get customer data from sessionStorage
        const customerData = sessionStorage.getItem("currentCustomer");

        if (!customerData) {
            // Redirect to login if no customer data is found
            navigate("/");
            return;
        }

        const customer = JSON.parse(customerData);
        setCustomerName(customer.name);
        setPhoneNumber(customer.phone);
    }, [navigate]);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            {/* Logo aligned to the left */}
            <div className="p-6">
                <img src={logo} alt="International Investment Bank, Ltd." width={286} height={40} />
            </div>

            {/* Centered OTP Section */}
            <div className="flex flex-col items-center justify-center flex-grow">
                {/* User Icon and Name */}
                <div className="mb-4 flex flex-col items-center">
                    <div className="rounded-full bg-[#F24822] p-3">
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="mt-2 text-sm font-medium text-[#084086]">Login as {customerName}?</h2>
                </div>

                <div className="w-full max-w-md rounded-md bg-[#F5F5F5] p-8 shadow-sm">
                    <p className="mb-4 text-center text-xs text-[#00142C]">
                        OTP has been sent to your number ending with {phoneNumber ? phoneNumber.slice(-4) : ""}
                    </p>

                    <OtpForm />
                    <div className="mt-4 text-right">
                        <OtpHelpDialog />
                    </div>

                    {/* <div className="mt-4 text-right">
                        <Link to="/" className="text-xs text-[#084086]">
                            Did not get the code?
                        </Link>
                    </div> */}
                    <div className="mt-8 text-center text-xs text-[#084086]">
                        Copyright © 2025 International Investment Bank, Ltd.
                    </div>
                </div>

            </div>
        </div>
    );
}



