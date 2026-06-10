import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Home() {

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="text-center py-5">

          <h1 className="display-3 fw-bold text-danger">

            EL BOOM DEL SABOR

          </h1>

          <p className="lead">

            Sabores tradicionales que
            conquistan tu paladar

          </p>

          <button className="btn btn-danger btn-lg me-3">

            Ver Menú

          </button>

          <button className="btn btn-warning btn-lg">

            Reservar Mesa

          </button>

        </div>

        <div className="row mt-5">

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Silpancho</h5>

                <p>Plato tradicional boliviano.</p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Plato Paceño</h5>

                <p>Una especialidad de la casa.</p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
                className="card-img-top"
                alt=""
              />

              <div className="card-body">

                <h5>Charquekan</h5>

                <p>Preparado con ingredientes frescos.</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;