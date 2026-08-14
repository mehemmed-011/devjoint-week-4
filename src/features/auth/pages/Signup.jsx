import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUser, getUserByEmail } from "../api/authApi";

import "./Auth.css";

function Signup() {
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    name: "",
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

    let name = formData.name.trim();
    let email = formData.email.trim();
    let password = formData.password;

    if (!name) {
      newErrors.name = "Ad və soyad daxil edin.";
    } else if (name.length < 3) {
      newErrors.name = "Ad və soyad ən azı 3 simvoldan ibarət olmalıdır.";
    }

    if (!email) {
      newErrors.email = "E-poçt daxil edin.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Düzgün e-poçt ünvanı daxil edin.";
    }

    if (!password) {
      newErrors.password = "Şifrə daxil edin.";
    } else if (password.length < 8) {
      newErrors.password = "Şifrə ən azı 8 simvoldan ibarət olmalıdır.";
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

      let existingUser = await getUserByEmail(email);

      if (existingUser) {
        setErrors({
          email: "Bu e-poçt ilə artıq hesab mövcuddur.",
        });

        return;
      }

      await createUser({
        name: formData.name.trim(),
        email,
        password: formData.password,
      });

      navigate("/login");
    } catch (error) {
      console.error(error);

      setServerError(
        "Qeydiyyat zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.",
      );
    } finally {
      setLoading(false);
    }
  };

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

          {serverError && (
            <div className="auth__server-error">{serverError}</div>
          )}

          <form className="signup__form" onSubmit={handleSubmit} noValidate>
            <div className="signup__field">
              <label htmlFor="name">Ad və soyad</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Məhəmməd İbrahimli"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && (
                <span className="auth__error">{errors.name}</span>
              )}
            </div>

            <div className="signup__field">
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

            <div className="signup__field">
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

            <button type="submit" className="signup__button" disabled={loading}>
              {loading ? "Hesab yaradılır..." : "Hesab yarat"}
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
