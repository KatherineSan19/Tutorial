import React from 'react';

import datos from '../requests/adopcion';
//import columnas from '../requests/info';

import {Table, Button} from 'antd';


export default class Lista extends React.Component{


constructor(props){
  super(props);
  this.state = {
      adopcion: []
    };
}

render(){
  return(
  <div style={{padding: '100 px'}}>
    <div>
    <h2>Adopción</h2>
      <Table columns={[
          {
            title:'Foto',
            dataIndex:'foto',
            render: (tag,registro) =>(
              <img src={registro.foto} width="75" height="75"/>
            )
          },
          {
            title: 'Nombre',
        dataIndex: 'nombre',
          },
          {
            title:'Edad',
            dataIndex:'edad',
          },
          {
            title:'Sexo',
            dataIndex:'sexo',
          },
          
        ]} dataSource={datos.adopcion} size="small" bordered="true"/>
      </div>
  </div>
    );
  }
}
