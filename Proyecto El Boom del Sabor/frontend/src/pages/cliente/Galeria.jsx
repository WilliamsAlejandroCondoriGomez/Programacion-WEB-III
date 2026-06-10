import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Galeria() {

  const imagenes = [

    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

    "https://images.unsplash.com/photo-1552566626-52f8b828add9",

    "https://images.unsplash.com/photo-1514933651103-005eec06c04b",

    "https://images.unsplash.com/photo-1559339352-11d035aa65de",

    "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",

    "https://images.unsplash.com/photo-1515669097368-22e68427d265"

  ];

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-5">

          Galería del Restaurante

        </h1>

        <div className="row">

          {
            imagenes.map((img,index) => (

              <div
                className="col-md-4 mb-4"
                key={index}
              >

                <img
                  src={img}
                  alt=""
                  className="img-fluid rounded shadow"
                />

              </div>

            ))
          }

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Galeria;