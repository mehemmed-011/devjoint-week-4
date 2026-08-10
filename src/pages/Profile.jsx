import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <div className="profile__container">
        <div className="profile__header">
          <div>
            <h1 className="profile__title">Profil</h1>
          </div>

          <Link to="/dashboard" className="profile__back">
            İdarə paneli
          </Link>
        </div>

        <section className="profile__card">
          <div className="profile__avatar">Mİ</div>

          <div className="profile__info">
            <div className="profile__field">
              <span className="profile__label">Ad və soyad</span>

              <strong className="profile__value">Məhəmməd İbrahimli</strong>
            </div>

            <div className="profile__field">
              <span className="profile__label">E-poçt</span>

              <strong className="profile__value">example@mail.com</strong>
            </div>

            <div className="profile__field">
              <span className="profile__label">Hesab statusu</span>

              <span className="profile__status">Aktiv</span>
            </div>
          </div>
        </section>

        <section className="profile__section">
          <h2 className="profile__section-title">Hesab haqqında</h2>

          <p className="profile__section-text">
            TaskFlow hesabınız vasitəsilə tapşırıqlarınızı idarə edə, onların
            statusunu izləyə və iş prosesinizi daha rahat təşkil edə bilərsiniz.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Profile;
