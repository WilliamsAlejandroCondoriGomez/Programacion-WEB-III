import {
 Bar
}
from "react-chartjs-2";

function Estadisticas() {

 const data = {

  labels:[
   "Ene",
   "Feb",
   "Mar",
   "Abr"
  ],

  datasets:[
   {
    label:"Ventas",
    data:[
     500,
     800,
     1200,
     900
    ]
   }
  ]

 };

 return (

  <div className="container">

   <h2>

    Estadísticas

   </h2>

   <Bar data={data}/>

  </div>

 );

}

export default Estadisticas;