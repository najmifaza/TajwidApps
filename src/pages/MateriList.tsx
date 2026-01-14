import { Link } from "react-router-dom";
import { tajwidData } from "../data/tajwidData";

const MateriList = () => {
  return (
    <section className="materi-list section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Materi Tajwid</h2>
        <p>Pilih materi yang ingin Anda pelajari</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {tajwidData.map((materi) => (
            <div
              key={materi.id}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="materi-card">
                <div className="card-image">
                  <img
                    src={materi.image}
                    alt={materi.title}
                    className="img-fluid"
                  />
                </div>
                <div className="card-content">
                  <h3>{materi.title}</h3>
                  <p>Kategori: {materi.category}</p>
                  <Link
                    to={`/materi/${materi.slug}`}
                    className="btn btn-primary"
                  >
                    Baca Materi
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MateriList;
