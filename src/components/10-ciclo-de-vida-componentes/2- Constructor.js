/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'

class Contador extends React.Component {
  
  //? Es el primer metodo ejecutado en el montaje del componente. Puede ser util para inicializar propiedades.
  //? permite pasar contexto a los metodos de la clase.
  //? permite crear refs para acceder a los elementos dentro del dom real.
  //? incializar propiedades del estado provenientes de las props.
  constructor(props){
    super(props)

    //? agrega el contexto de la clase 'this' al metodo
    this.agregar = this.agregar.bind(this)

    this.state = {
      message: 'Hola Ninja',
      num: props.num
    }
  }

  agregar () {
    

    this.setState(state => ({
      num: state.num + 1 
    }))
  }

  render(){
    return (
      <div>
        <button ref={this.props.buttonRef}>ref</button>
        <button onClick={ this.agregar }>
          Click ({ this.state.num })
        </button>
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor(){
    super()

    this.buttonRef = React.createRef()
  }

  verRef = () => {
    console.log(this.buttonRef)
  }

  render(){
    const styles = {
      'color': '#fff',
      'backgroundColor': '#006a93',
      'padding': '1rem 0.5rem',
      'borderRadius': '0.5em'
    }
    return (
      <div style={styles}>
        <h1>Metodo Constructor</h1>
        <Contador num={1200} buttonRef={this.buttonRef}/>
        <button onClick={this.verRef}>
          Ver Ref
        </button>
      </div>
    )
  }
}