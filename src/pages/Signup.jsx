import { Link } from "react-router-dom";
import "./Auth.css";

function Signup() {
  return (
    <main className="signup">
      <div className="signup__container">
        <div className="signup__card">
          <div className="signup__header">
            <Link to="/" className="signup__logo">
              TaskFlow
            </Link>

            <h1 className="signup__title">Hesab yaradın</h1>
          </div>

          <form className="signup__form">
            <div className="signup__field">
              <label htmlFor="name">Ad və soyad</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Məhəmməd İbrahimli"
              />
            </div>

            <div className="signup__field">
              <label htmlFor="email">E-poçt</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="signup__field">
              <label htmlFor="password">Şifrə</label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
            </div>

            <button type="submit" className="signup__button">
              Hesab yarat
            </button>
          </form>

          <div className="signup__footer">
            <span>Artıq hesabınız var?</span>
            
            <Link to="/login">Daxil olun</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
