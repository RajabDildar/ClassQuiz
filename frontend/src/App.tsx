import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/teacherdashboard" element={<TeacherDashboard />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
