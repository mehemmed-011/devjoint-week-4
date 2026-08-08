import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              TaskFlow
            </Link>

            <p className="footer__description">
              Tapşırıqlarınızı daha rahat idarə edin, işlərinizi təşkil edin və
              məhsuldarlığınızı artırın.
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3 className="footer__title">Naviqasiya</h3>

              <Link to="/" className="footer__link">
                Ana səhifə
              </Link>

              <a href="#features" className="footer__link">
                Xüsusiyyətlər
              </a>

              <a href="#how-it-works" className="footer__link">
                Necə işləyir?
              </a>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Hesab</h3>

              <Link to="/login" className="footer__link">
                Daxil ol
              </Link>

              <Link to="/signup" className="footer__link">
                Qeydiyyat
              </Link>
            </div>

            <div className="footer__column">
              <h3 className="footer__title">Əlaqə</h3>

              <a href="mailto:info@taskflow.az" className="footer__link">
                info@taskflow.az
              </a>

              <span className="footer__text">Bakı, Azərbaycan</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 TaskFlow. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
