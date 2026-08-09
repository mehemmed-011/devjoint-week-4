import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <div className="not-found__card">
          <span className="not-found__code">404</span>

          <h1 className="not-found__title">Səhifə tapılmadı</h1>

          <p className="not-found__text">
            Axtardığınız səhifə mövcud deyil və ya silinmiş ola bilər.
          </p>

          <Link to="/" className="not-found__button">
            Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
