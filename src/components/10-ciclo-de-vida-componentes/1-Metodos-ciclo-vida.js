/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'

export default class App extends React.Component {
  
  //? se ejecuta una sola vez al momento que el componente es montado 
  //? 1. constructor 2.render 3.componentDidMount
  componentDidMount() {}

  //? se ejecuta multipless veces, e desencadena cada vez que:
  //? se recibe nuevas props, se llame a setState o a forceUpdate
  //? 1.getDerivedStateFromProps(): sincroniza o copia informacion desde las props hacia el estado del componente
  //? 2.shouldComponentUpdate(): decide si el componente se actualiza o no.
  //? 3.render(): renderiza en el dom el componente para un estado y props determinados.
  //? 4.getSnapshotBeforeUpdate()
  //? 5.componentDidUpdate()
  componentDidUpdate() {}

  componentWillUnmount() {}

  render(){
    return (
      <div>
        <h1>Metodos de ciclo de vida </h1>
      </div>
    )
  }
}