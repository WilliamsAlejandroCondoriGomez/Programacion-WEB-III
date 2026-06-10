import SidebarAdmin from "../../components/SidebarAdmin";

function Logs() {

  const logs = [

    {
      usuario:"admin",
      ip:"192.168.0.10",
      browser:"Chrome",
      evento:"INGRESO",
      fecha:"21/06/2026",
      hora:"10:00"
    },

    {
      usuario:"cliente1",
      ip:"192.168.0.15",
      browser:"Firefox",
      evento:"SALIDA",
      fecha:"21/06/2026",
      hora:"10:30"
    }

  ];

  return(

    <div className="d-flex">

      <SidebarAdmin/>

      <div className="container mt-4">

        <h2>Logs del Sistema</h2>

        <table className="table table-striped">

          <thead>

            <tr>
              <th>Usuario</th>
              <th>IP</th>
              <th>Browser</th>
              <th>Evento</th>
              <th>Fecha</th>
              <th>Hora</th>
            </tr>

          </thead>

          <tbody>

            {logs.map((log,index)=>(

              <tr key={index}>

                <td>{log.usuario}</td>
                <td>{log.ip}</td>
                <td>{log.browser}</td>
                <td>{log.evento}</td>
                <td>{log.fecha}</td>
                <td>{log.hora}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Logs;