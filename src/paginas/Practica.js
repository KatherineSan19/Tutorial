import React from 'react';

import {List, Button} from 'antd';

export default class Practica extends React.Component{
  constructor(props){
    super(props);

    this.state={
    numero:0,
    edad:10
    };

    setInterval(()=>{
      this.setState({
        numero: this.state.numero + 1
      });
    },1000)
  }



  nombres(){
      return (

    <List
      size="small"
      bordered
      dataSource={['avion','carro','tren','barco']}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
      )
  }



  render(){
    return(
      <div>
      {this.nombres()}
      <h4>{this.state.numero}</h4>
      <p>{this.setState.edad=this.state.edad * 5}</p>
      </div>
    );
  }

}
