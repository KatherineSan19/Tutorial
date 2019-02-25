import React from 'react';

import { Button, Row, } from 'antd';

import Titulo from '../componentes/Titulo';
import Beneficios from '../componentes/Beneficios';
import PlaceCard from '../componentes/places/PlaceCard';
import data from '../requests/places';

export default class Home extends React.Component{

  constructor(props){
    super(props);

    this.state={
      places: data.places
    }

    this.hidePLaces=this.hidePLaces.bind(this);
  }

  places(){
    return this.state.places.map((place, index)=>{
      return(
        <PlaceCard onRemove={this.hidePLaces} place={place} index={index}></PlaceCard>
      );
    })
  }

hidePLaces(place){
  this.setState({
    places: this.state.places.filter(el => el != place)
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
              <Beneficios></Beneficios>
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
