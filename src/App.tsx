import { Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/LoginPage";
import VerifyOtpPage from "./pages/VerifyOtpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/offshorebanking/login" />} />
        <Route path="/offshorebanking/login" element={<LoginPage />} />
        <Route path="/verify-otp" element={<VerifyOtpPage />} />
      </Routes>
    </>
  );
}

export default App;
