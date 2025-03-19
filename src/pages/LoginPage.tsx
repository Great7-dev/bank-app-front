import { LoginForm } from "../components/LoginForm";
import logo from "../assets/logo.png";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFF]">
            <div className="w-full max-w-md mb-8 flex justify-center">
                <img src={logo} alt="International Investment Bank, Ltd." width={286} height={40} />
            </div>
            <div className="rounded-md bg-[#F5F5F5] p-8 shadow-sm w-full max-w-md h-[400px] flex flex-col justify-between">
                <h2 className="mb-6 text-center text-sm font-medium text-[#084086]">Login to your Offshore Account</h2>
                <LoginForm />
                <div className="mt-8 text-center text-xs text-[#084086]">
                    Copyright © 2025 International Investment Bank, Ltd.
                </div>
                <p className="mt-4 text-center text-xs text-[#000000]">
                    Notice: Unauthorized use is prohibited. By proceeding, you confirm that you are an authorized user.
                </p>
            </div>
        </div>
    );
}
