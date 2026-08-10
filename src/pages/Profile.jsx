import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  let user = JSON.parse(localStorage.getItem("user"));

  let userName = user.name;
  let userEmail = user.email;

  let getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  let initials = getInitials(userName);

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
          <div className="profile__avatar">{initials}</div>

          <div className="profile__info">
            <div className="profile__field">
              <span className="profile__label">Ad və soyad</span>
              <strong className="profile__value">{userName}</strong>
            </div>

            <div className="profile__field">
              <span className="profile__label">E-poçt</span>
              <strong className="profile__value">{userEmail}</strong>
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
