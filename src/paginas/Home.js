import React from 'react';

import { Button, Card, Row, Col } from 'antd';

import Titulo from '../componentes/Titulo';
import data from '../requests/places';

export default class Home extends React.Component{

  places(){
    return data.places.map((place, index)=>{
      return(
        <Col xs={24} md={8} key={index}>
        <Card className="Header-Benefit-publi" title={place.title} >

          <div className="Header-Benefit-image">
          <img src={process.env.PUBLIC_URL + place.imageUrl} width="200" height="250"/>
          </div>
          <div className="Header-Benefit-t" >
          {place.description}
          </div>

        </Card>
        </Col>
      );
    })
  }


  render(){
    return(
      <section>
        <div className= "Header-background">
          <div style={{"width":"80%", "margin":"0 auto"}}>
            <div className="Header-main">


            <img className="Header-illustration"  src={process.env.PUBLIC_URL + '/images/adoptados.png'}/>
            <Titulo></Titulo>
            <div>
            <Button style={{background: 'rgb(255, 102, 153)' }}>Crear cuenta gratuita</Button>
            </div>
            <div>
              <h3 style={{'fontSize':'18px'}}>Servicios</h3>
            </div>
            <div>
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
            </div>
          </div>
        </div>
        </div>
        <div style={{ background: 'rgb(255, 204, 204)', padding: '50 px', color: 'black' }}>
          <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
          <Row>
           {this.places()}
           </Row>

        </div>
    </section>
    );
  }
}
