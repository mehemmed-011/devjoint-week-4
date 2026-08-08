import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <span className="hero__badge">
                ✨ Tapşırıqlarınızı daha rahat idarə edin
              </span>

              <h1 className="hero__title">
                İşlərinizi təşkil edin.
                <span> Məqsədlərinizə çatın.</span>
              </h1>

              <p className="hero__description">
                TaskFlow gündəlik tapşırıqlarınızı idarə etməyə,
                işlərinizi prioritetləşdirməyə və məhsuldarlığınızı
                artırmağa kömək edən sadə və müasir platformadır.
              </p>

              <div className="hero__actions">
                <Link to="/signup" className="hero__primary-btn">
                  İndi başlayın
                </Link>

                <a href="#features" className="hero__secondary-btn">
                  Xüsusiyyətlərə bax
                </a>
              </div>

              <div className="hero__stats">
                <div className="hero__stat">
                  <strong>10K+</strong>
                  <span>İdarə olunan task</span>
                </div>

                <div className="hero__stat">
                  <strong>99%</strong>
                  <span>Məmnun istifadəçi</span>
                </div>

                <div className="hero__stat">
                  <strong>24/7</strong>
                  <span>Əlçatan platforma</span>
                </div>
              </div>
            </div>

            <div className="hero__preview">
              <div className="preview__window">
                <div className="preview__header">
                  <div>
                    <span className="preview__small-text">
                      İdarə paneli
                    </span>

                    <h3>Salam, Məhəmməd</h3>
                  </div>

                  <div className="preview__avatar">
                    M
                  </div>
                </div>

                <div className="preview__stats">
                  <div className="preview__card">
                    <span>Bütün tasklar</span>
                    <strong>24</strong>
                  </div>

                  <div className="preview__card">
                    <span>Tamamlanan</span>
                    <strong>10</strong>
                  </div>
                </div>

                <div className="preview__tasks">
                  <div className="preview__task">
                    <div className="preview__task-check">
                      ✓
                    </div>

                    <div>
                      <strong>Landing page hazırla</strong>
                      <span>Davam edir</span>
                    </div>
                  </div>

                  <div className="preview__task">
                    <div className="preview__task-check preview__task-check--done">
                      ✓
                    </div>

                    <div>
                      <strong>Dashboard dizayn et</strong>
                      <span>Tamamlandı</span>
                    </div>
                  </div>

                  <div className="preview__task">
                    <div className="preview__task-check">
                      ✓
                    </div>

                    <div>
                      <strong>Layihəni yoxla</strong>
                      <span>Gözləyir</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section__container">
            <div className="section__heading">
              <span className="section__badge">
                Xüsusiyyətlər
              </span>

              <h2>
                İşlərinizi idarə etmək üçün lazım olan hər şey
              </h2>

              <p>
                Gündəlik işlərinizi daha səmərəli idarə etmək üçün
                hazırlanmış sadə və güclü iş mühiti.
              </p>
            </div>

            <div className="features__grid">
              <article className="feature-card">
                <div className="feature-card__icon">✓</div>

                <h3>Task idarəetməsi</h3>

                <p>
                  Tasklarınızı yaradın, redaktə edin, silin və
                  onları bir paneldən idarə edin.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-card__icon">↗</div>

                <h3>İrəliləyişi izləyin</h3>

                <p>
                  Gözləyən, davam edən və tamamlanan tasklarınızı
                  rahat şəkildə izləyin.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-card__icon">🔒</div>

                <h3>Təhlükəsiz giriş</h3>

                <p>
                  Hesabınız autentifikasiya sistemi ilə qorunur
                  və şəxsi məlumatlarınız yalnız sizə açıqdır.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-card__icon">⚡</div>

                <h3>Sürətli və sadə</h3>

                <p>
                  Lazımsız mürəkkəblik olmadan işlərinizə
                  fokuslanmağınıza kömək edən interfeys.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="section__container">
            <div className="section__heading">
              <span className="section__badge">
                Necə işləyir?
              </span>

              <h2>
                Cəmi üç addımda işə başlayın
              </h2>
            </div>

            <div className="steps">
              <div className="step">
                <span className="step__number">01</span>

                <h3>Hesab yaradın</h3>

                <p>
                  Qeydiyyatdan keçin və öz şəxsi TaskFlow
                  hesabınızı yaradın.
                </p>
              </div>

              <div className="step">
                <span className="step__number">02</span>

                <h3>Task əlavə edin</h3>

                <p>
                  Tasklar yaradın, prioritet təyin edin və
                  gündəlik işlərinizi təşkil edin.
                </p>
              </div>

              <div className="step">
                <span className="step__number">03</span>

                <h3>İşlərinizi tamamlayın</h3>

                <p>
                  İrəliləyişinizi izləyin və tapşırıqlarınızı
                  vaxtında tamamlayın.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta__container">
            <h2>İşlərinizi idarə etməyə hazırsınız?</h2>

            <p>
              TaskFlow ilə tapşırıqlarınızı bu gündən idarə etməyə başlayın.
            </p>

            <Link to="/signup" className="cta__button">
              Pulsuz hesab yaradın
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;