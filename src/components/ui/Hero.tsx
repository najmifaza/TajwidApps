const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="company-badge mb-4">
                <i
                  className="bi bi-circle-fill me-2"
                  style={{ fontSize: "0.5rem" }}
                ></i>
                Platform Belajar Tajwid #1
              </div>

              <h1 className="mb-4">
                Baca Al-Qur'an <br />
                Lebih <br />
                <span className="accent-text text-gradient">
                  Fasih & Tartil
                </span>
              </h1>

              <p className="mb-4 mb-md-5">
                Tazakka Tajwid membantu Anda memahami hukum bacaan, makharijul
                huruf, dan sifat huruf dengan metode interaktif yang mudah
                dipahami oleh pemula hingga mahir.
              </p>

              <div className="hero-buttons">
                <a
                  href="#kurikulum"
                  className="btn btn-primary me-0 me-sm-2 mx-1"
                >
                  Mulai Belajar
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Xszm9b05ErE"
                  className="btn btn-link mt-2 mt-sm-0 glightbox"
                >
                  <i className="bi bi-play-circle me-1"></i>
                  Pengenalan Ilmu Tajwid
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="hero-image"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <img
                src="/assets/img/illustration-1.png"
                alt="Hero Image"
                className="img-fluid"
              />

              <div className="customers-badge">
                <h5 className="mb-0 mt-2">⭐⭐⭐⭐⭐</h5>
                <p className="mb-0 mt-1">
                  4.9/5 Rating rata-rata dari ratusan pengguna yang belajar
                  Tajwid bersama kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
