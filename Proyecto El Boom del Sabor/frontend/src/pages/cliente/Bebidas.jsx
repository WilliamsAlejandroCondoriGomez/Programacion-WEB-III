import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DrinkCard from "../../components/DrinkCard";

function Bebidas() {

  const bebidas = [

    {
      id:101,
      nombre:"Coca Cola",
      precio:10,
      imagen:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
    },

    {
      id:102,
      nombre:"Sprite",
      precio:10,
      imagen:"https://images.unsplash.com/photo-1581636625402-29b2a704ef13"
    },

    {
      id:103,
      nombre:"Fanta",
      precio:10,
      imagen:"https://images.unsplash.com/photo-1624517452488-04869289c4ca"
    }

  ];

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h1 className="text-center mb-5">

          Bebidas

        </h1>

        <div className="row">

          {
            bebidas.map(bebida => (
              <DrinkCard
                key={bebida.id}
                bebida={bebida}
              />
            ))
          }

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Bebidas;