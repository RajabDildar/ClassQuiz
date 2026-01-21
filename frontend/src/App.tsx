import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/teacherdashboard" element={<TeacherDashboard />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
