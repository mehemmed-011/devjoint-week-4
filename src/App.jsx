import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./features/auth/pages/Signup";
import Login from "./features/auth/pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./features/tasks/pages/Dashboard";
import Profile from "./features/profile/pages/Profile";

import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";
import "./components/ErrorBoundary.css";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
