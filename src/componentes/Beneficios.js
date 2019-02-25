import React from 'react';

import { Card} from 'antd';

export default class Beneficios extends React.Component{
  render(){
    return(
      <ul>
        <Card className="Header-Benefit" style={{ background: 'rgb(204, 221, 255)' }}>
          <div className="row">
            <div className="Header-Benefit-image">
              <img src={process.env.PUBLIC_URL + '/images/asesoria-png-1.png'} width="100" height="100"/>
            </div>
            <div className="Header-Benefit-content">
              <h3>Asesoria</h3>
              <p>Respondemos a todas sus dudas y ayudamos a que su adopcion sea la adecuada. Separe su cita</p>
            </div>
          </div>
        </Card>

        <Card className="Header-Benefit" style={{background: 'rgb(230, 255, 242)' }}>
          <div className="row">
            <div className="Header-Benefit-image" >
              <img src={process.env.PUBLIC_URL + '/images/3.png'} width="100" height="100"/>
            </div>
            <div className="Header-Benefit-content">
              <h3>Capacitacion y evaluacion</h3>
              <p>Informese sobre el cuidado de su mascota; ofrecemos charlas y talleres.</p>
            </div>
          </div>
        </Card>

        <Card className="Header-Benefit"style={{background: 'rgb(255, 255, 204)' }}>
          <div className="row">
            <div className="Header-Benefit-image" >
              <img src={process.env.PUBLIC_URL + '/images/veterinario.png'} width="100" height="100"/>
            </div>
            <div className="Header-Benefit-content">
                <h3>Servicio Veterinario</h3>
                <p>Cuidamos la salud de tu mascota a menor precio. Estamos a su servicio las 24 horas.</p>
            </div>
          </div>
        </Card>
      </ul>
    );
  }
}
