import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./Navbar.css";

function Navbar() {
  let { isAuthenticated } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          TaskFlow
        </Link>

        <nav className="navbar__nav">
          <Link to="/" className="navbar__link">
            Ana səhifə
          </Link>

          <a href="#features" className="navbar__link">
            Xüsusiyyətlər
          </a>

          <a href="#how-it-works" className="navbar__link">
            Necə işləyir?
          </a>
        </nav>

        <div className="navbar__actions">
          {isAuthenticated ? (
            <Link to="/profile" className="navbar__profile">
              Profil
            </Link>
          ) : (
            <>
              <Link to="/login" className="navbar__login">
                Daxil ol
              </Link>

              <Link to="/signup" className="navbar__signup">
                Qeydiyyat
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;