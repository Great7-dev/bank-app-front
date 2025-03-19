"use client"

import { useEffect, useState } from "react"
import { OtpForm } from "../components/OtpForm"
import { OtpHelpDialog } from "../components/otp-help-dialog"
import logo from "../assets/logo.png"

export default function VerifyOtpPage() {
    const [customerName, setCustomerName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    useEffect(() => {
        // In Next.js, we would use useRouter instead of useNavigate
        const customerData = sessionStorage.getItem("currentCustomer")

        if (!customerData) {
            window.location.href = "/"
            return
        }

        const customer = JSON.parse(customerData)
        setCustomerName(customer.name)
        setPhoneNumber(customer.phone)
    }, [])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white">
            {/* Logo container with fixed height */}
            <div className="w-full max-w-md mb-8 flex justify-center h-[40px]">
                <img
                    src={logo}
                    alt="International Investment Bank, Ltd."
                    width={286}
                    height={40}
                />
            </div>

            {/* Fixed height container for the user icon and text */}
            <div className="flex flex-col items-center w-full max-w-md h-[60px]">
                <div className="rounded-full bg-[#F24822] p-3 mb-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                <h2 className="text-sm font-medium text-[#084086]">Login as {customerName}?</h2>
            </div>

            {/* Card with fixed dimensions */}
            <div className="bg-[#F5F5F5] rounded-md p-8 shadow-sm w-full max-w-md h-[400px] flex flex-col justify-between">
                <div className="mt-20">
                    <p className="text-center text-xs text-[#00142C] mb-6">
                        OTP has been sent to your number ending with {phoneNumber ? phoneNumber.slice(-4) : ""}
                    </p>
                    <OtpForm />
                </div>

                <div className="mt-4 text-right">
                    <OtpHelpDialog />
                </div>

                <div className="text-center text-xs text-[#084086] mt-auto">
                    Copyright © 2025 International Investment Bank, Ltd.
                </div>
            </div>

            {/* Fixed height container for the notice text */}
            <div className="h-[24px] mt-4">{/* No notice text on this page */}</div>
        </div>
    )
}

