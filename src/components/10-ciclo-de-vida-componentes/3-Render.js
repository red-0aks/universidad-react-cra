/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React, {Component} from 'react'

class Comp extends Component {
  render(){
    return (
      <div>
        <h2>Componente</h2>
      </div>
    )
  }
}

const list = (
  <ul>
    <li>Piña</li>
    <li>Pera</li>
    <li>Manzana</li>
  </ul>
)

export default class App extends Component {
  //? El metodo render es el tercer metodo en ejecutarse dentro del ciclo de vida
  //? Permite mezclar marcado regular HTML con componentes creados.
  //? Permite crear toda la logica para montar diferentes contenidos condicionales.
  
  getList = () => {
    return (
      <ul>
        <li>Fresa</li>
        <li>Sandia</li>
        <li>Mango</li>
      </ul>
    )
  }
  
  render(){
    return (
      <div>
        <h1>Metodo Render</h1>
        <Comp/>
        { this.getList() }
        { list }
      </div>
    )
  }
}