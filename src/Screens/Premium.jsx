import React from 'react'
import checkMarkImage from '../img/check.png'

function Premium() {
  return (
    <div className="container mt-5">
      {/* Beneficios Premium */}
      <h1 className="text-center">Siente la diferencia</h1>
      <p className="text-center mb-4 fs-4">Pásate a Premium y disfruta del control total de lo que<br></br> escuchas. Cancelas cuando quieras.</p>

      <div className="table-responsive rounded">
        <table className="table table-secondary">
          <thead>
            <tr>
              <th className="text-white" scope="col">Qué incluye</th>
              <th className="text-white" scope="col">Plan Kodigo Music Free</th>
              <th scope="col" className="bg-primary text-white">Planes Premium de Kodigo Music</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-white fw-bold">Escucha tu música favorita sin anuncios</td>
              <td className="text-white fw-bold">—</td>
              <td className="text-center"><img src={checkMarkImage}/></td>
            </tr>
            <tr>
              <td className="text-white fw-bold">Descarga de canciones para disfrutarlas sin conexión</td>
              <td className="text-white fw-bold">—</td>
              <td className="text-center"><img src={checkMarkImage}/></td>
            </tr>
            <tr>
              <td className="text-white fw-bold">Escucha canciones en cualquier orden</td>
              <td className="text-white fw-bold">—</td>
              <td className="text-center"><img src={checkMarkImage}/></td>
            </tr>
            <tr>
              <td className="text-white fw-bold">Calidad del audio alta</td>
              <td className="text-white fw-bold">—</td>
              <td className="text-center"><img src={checkMarkImage}/></td>
            </tr>
            <tr>
              <td className="text-white fw-bold">Escucha lo que quieras con tus amigos, en tiempo real</td>
              <td className="text-white fw-bold">—</td>
              <td className="text-center"><img src={checkMarkImage}/></td>
            </tr>
            <tr>
              <td className="text-white fw-bold">Organiza la cola de reproducción</td>
              <td className="text-white fw-bold">—</td>
              <td className="text-center"><img src={checkMarkImage}/></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container my-2 w-auto p-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-primary">
            <div className="card-header text-white bg-primary text-center">
              Todos los planes Premium incluyen lo siguiente
            </div>
            <ul className="list-group list-group-flush text-center">
              <li className="list-group-item">Escucha tu música favorita sin anuncios</li>
              <li className="list-group-item">Descarga de canciones para disfrutarlas sin conexión</li>
              <li className="list-group-item">Escucha canciones en cualquier orden</li>
              <li className="list-group-item">Calidad del audio alta</li>
              <li className="list-group-item">Escucha lo que quieras con tus amigos, en tiempo real</li>
              <li className="list-group-item">Organiza la cola de reproducción</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


      {/* Planes Premium */}
      <div className="container py-5">
      <div className="row text-center">
        <h1 className="text-center mb-4">Planes Premium</h1>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-transparent border-0">
              <h3 className="my-0">Premium Individual</h3>
              <p className="lead">Gratis por 1 mes</p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>1 cuenta Premium</li>
                <li>Cancelas cuando quieras</li>
              </ul>
              <button className="btn btn-primary w-100">Probar gratis durante 1 mes</button>
              <p className="mt-3">Gratis durante 1 mes. Luego, 5,99 US$ al mes. Oferta disponible solo si no has probado Premium. Consulta las condiciones.</p>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-transparent border-0">
              <h3 className="my-0">Premium Duo</h3>
              <p className="lead">7,99 US$ al mes</p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>2 cuentas Premium</li>
                <li>Cancelas cuando quieras</li>
              </ul>
              <button className="btn btn-warning w-100">Conseguir Premium Duo</button>
              <p className="mt-3">Para parejas que convivan. Consulta las condiciones.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-header bg-transparent border-0">
              <h3 className="my-0">Premium Familiar</h3>
              <p className="lead">10,99 US$ al mes</p>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li>Hasta 6 cuentas Premium</li>
                <li>Bloquea la música explícita</li>
                <li>Cancelas cuando quieras</li>
              </ul>
              <button className="btn btn-dark w-100">Conseguir Premium Familiar</button>
              <p className="mt-3">Para hasta 6 miembros de una familia que convivan. Consulta las condiciones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Premium