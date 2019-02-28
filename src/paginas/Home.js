import React from 'react';

import { Button, Row, Menu, Icon } from 'antd';

import Titulo from '../componentes/Titulo';
import Beneficios from '../componentes/Beneficios';
import PlaceCard from '../componentes/places/PlaceCard';
import data from '../requests/places';

import TransitionGRoup from 'react-transition-group/TransitionGroup';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
    places: this.state.places.filter(el => el !== place)
  })
}

handleClick = (e) => {
  console.log('click ', e);
}

  render(){
    return(
      <section>
        <div className= "Header-background">

          <div style={{"margin":"0 auto"}}>
          <div className= "Botones" style={{background: 'rgb(206, 172, 189)' }} align="right">

          <Menu
                  title="Menu"
                  onClick={this.handleClick}
                  style={{ width: 250, background: 'rgb(206, 172, 189)' }}
                  mode="horizontal"
                >
                      <SubMenu title={<span className="submenu-title-wrapper"><Icon type="bars" />Menu</span>}>
                      <Menu.Item key="1"><Icon type="user" />Ingresar a cuenta</Menu.Item>
                      <Menu.Item key="2"><Icon type="user-add" />Crear cuenta gratuita</Menu.Item>
                      <Menu.Item key="3"><Icon type="search" />Buscar</Menu.Item>
                      </SubMenu>
                  </Menu>



          </div>
            <div className="Header-main">

            <img className="Header-illustration"  src={process.env.PUBLIC_URL + '/images/adoptados.png'}/>
            <Titulo></Titulo>

            <div>
              <h3 style={{'fontSize':'18px'}}>Servicios</h3>
            </div>
            <div>
              <Beneficios></Beneficios>
            </div>
          </div>
        </div>
        </div>
        <div style={{ background: 'rgb(206, 172, 189)', padding: '50 px', color: 'black' }}>
          <h3 style={{'fontSize':'24px'}}>Sitios Populares</h3>
          <TransitionGRoup>
           <Row>
           {this.places()}
           </Row>
          </TransitionGRoup>
        </div>
    </section>
    );
  }
}
