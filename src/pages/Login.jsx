import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getUserByEmail } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

import "./Auth.css";

function Login() {
  let navigate = useNavigate();
  let { login } = useAuth();
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let [errors, setErrors] = useState({});
  let [serverError, setServerError] = useState("");
  let [loading, setLoading] = useState(false);
  let handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setServerError("");
  };

  let validate = () => {
    let newErrors = {};
    let email = formData.email.trim();
    let password = formData.password;

    if (!email) {
      newErrors.email = "E-poçt daxil edin.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Düzgün e-poçt ünvanı daxil edin.";
    }

    if (!password) {
      newErrors.password = "Şifrə daxil edin.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    setServerError("");

    let isValid = validate();

    if (!isValid) {
      return;
    }

    setLoading(true);

    try {
      let email = formData.email.trim().toLowerCase();

      let user = await getUserByEmail(email);

      if (!user) {
        setServerError("E-poçt və ya şifrə yanlışdır.");
        return;
      }

      if (user.password !== formData.password) {
        setServerError("E-poçt və ya şifrə yanlışdır.");
        return;
      }

      let token = `mock-token-${user.id}-${Date.now()}`;

      let loggedInUser = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      login(loggedInUser, token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      setServerError(
        "Giriş zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.",
      );
    } finally {
      setLoading(false);
    }
  };

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

          {serverError && (
            <div className="auth__server-error">{serverError}</div>
          )}

          <form className="login__form" onSubmit={handleSubmit} noValidate>
            <div className="login__field">
              <label htmlFor="email">E-poçt</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <span className="auth__error">{errors.email}</span>
              )}
            </div>

            <div className="login__field">
              <label htmlFor="password">Şifrə</label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
              />

              {errors.password && (
                <span className="auth__error">{errors.password}</span>
              )}
            </div>

            <button type="submit" className="login__button" disabled={loading}>
              {loading ? "Daxil olunur..." : "Daxil ol"}
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
