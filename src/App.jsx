import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Sign Up</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;