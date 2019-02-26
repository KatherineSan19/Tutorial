import React from 'react';

import datos from '../requests/adopcion';
import columnas from '../requests/info';

import {Table} from 'antd';


export default class Lista extends React.Component{


constructor(props){
  super(props);
  this.state = {
      adopcion: [],
      info:[]
    };
}

render(){
  return(
  <div>
  <h2>Adopción</h2>
    <Table columns={columnas.info} dataSource={datos.adopcion} size="middle" />
  </div>
    );
  }
}
