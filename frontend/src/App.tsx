import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import OtpVerificationPage from "./pages/OtpVerificationPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/signup" element={<SignupPage />} />
      <Route
        path="/auth/signup/otp-verification"
        element={<OtpVerificationPage />}
      />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
