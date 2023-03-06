/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React, {Component} from 'react'

export default class App extends Component {
  
  //? Se ejecuta antes de que React aplique el resultado de Render() al DOM, y devuelve un objeto que se pasa a ComponentDidupdate(). Útil para guardar cosas como la posición de desplazamiento antes de renderizar los cambios.
  title = React.createRef()
  
  state = {
    text: 'Hola! 🖐🏼'
  }

  //? siempre debe retornar algun valor, aunque sea null
  //? tambien se debe declarar el metodo componentDidUpdate, ya que trabajan juntos.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(this.title.current.innerText)
    return 'Hola desde getSnapshotBeforeUpdate'
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(this.title.current.innerText)
    console.log(snapshot)
  }

  dispatch = () => {
    this.setState({
      text: 'Adios... 👋🏼'
    })
  }

  render(){

    return (
      <div>
        <h1>Metodo getSnapshotBeforeUpdate</h1>
        <h2
          ref={this.title}
        >{ this.state.text }</h2>
        <button onClick={this.dispatch}>
          cambiar
        </button>
      </div>
    )
  }
}