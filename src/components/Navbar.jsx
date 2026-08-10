import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  let [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    let handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
          {isLoggedIn ? (
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