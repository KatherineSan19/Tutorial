import React from 'react';

import { Card, Col, Button  } from 'antd';

export default class Beneficios extends React.Component {
  render() {
    return(
      <div>
      <Col xs={24} md={8} key={this.props.index}>
      <Card className="Header-Benefit-publi" title={this.props.place.title}  >

        <div className="Header-Benefit-image">
        <img src={process.env.PUBLIC_URL + this.props.place.imageUrl} width="200" height="250"/>
        </div>
        <div className="Header-Benefit-t" >
        {this.props.place.description}
        </div>
        <div >
          <Button type="secondary" size="small">Ver más</Button>
          <Button type="secondary" size="small" onClick={()=> this.props.onRemove(this.props.place)}>Ocultar</Button>
        </div>
      </Card>
      </Col>
      </div>
    );
  }
}
