import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teacherdashboard" element={<TeacherDashboard />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
