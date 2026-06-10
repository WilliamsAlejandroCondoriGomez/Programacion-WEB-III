import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FoodCard from "../../components/FoodCard";

function Menu() {

  const platos = [

    {
      id:1,
      nombre:"Silpancho",
      descripcion:"Especialidad Cochabambina",
      precio:25,
      imagen:"https://images.unsplash.com/photo-1544025162-d76694265947"
    },

    {
      id:2,
      nombre:"Lasaña",
      descripcion:"Receta italiana tradicional",
      precio:30,
      imagen:"https://images.unsplash.com/photo-1619895092538-128341789043"
    },

    {
      id:3,
      nombre:"Plato Paceño",
      descripcion:"Favorito de nuestros clientes",
      precio:28,
      imagen:"https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    }

  ];

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-5">

          Menú Principal

        </h1>

        <div className="row">

          {
            platos.map(plato => (
              <FoodCard
                key={plato.id}
                plato={plato}
              />
            ))
          }

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Menu;