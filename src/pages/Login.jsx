import { Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  return (
    <main className="login">
      <div className="login__container">
        <div className="login__card">
          <div className="login__header">
            <Link to="/" className="login__logo">
              TaskFlow
            </Link>

            <h1 className="login__title">Xoş gəlmisiniz</h1>
          </div>

          <form className="login__form">
            <div className="login__field">
              <label htmlFor="email">E-poçt</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="login__field">
              <label htmlFor="password">Şifrə</label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
            </div>

            <button type="submit" className="login__button">
              Daxil ol
            </button>
          </form>

          <div className="login__footer">
            <span>Hesabınız yoxdur?</span>

            <Link to="/signup">Qeydiyyatdan keçin</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
