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
        const customerData = sessionStorage.getItem("currentCustomer");

        if (!customerData) {
            navigate("/");
            return;
        }

        const customer = JSON.parse(customerData);
        setCustomerName(customer.name);
        setPhoneNumber(customer.phone);
    }, [navigate]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white">
            <div className="w-full max-w-md mb-8 flex justify-center">
                <img src={logo} alt="International Investment Bank, Ltd." width={286} height={40} />
            </div>

            <div className="rounded-md bg-[#F5F5F5] p-8 shadow-sm w-full max-w-md h-[400px] flex flex-col justify-between">
                <div className="mb-4 flex flex-col items-center">
                    <div className="rounded-full bg-[#F24822] p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="mt-2 text-sm font-medium text-[#084086]">Login as {customerName}?</h2>
                </div>

                <p className="mb-4 text-center text-xs text-[#00142C]">
                    OTP has been sent to your number ending with {phoneNumber ? phoneNumber.slice(-4) : ""}
                </p>

                <OtpForm />
                <div className="mt-4 text-right">
                    <OtpHelpDialog />
                </div>
                <div className="mt-8 text-center text-xs text-[#084086]">
                    Copyright © 2025 International Investment Bank, Ltd.
                </div>
            </div>
        </div>
    );
}

