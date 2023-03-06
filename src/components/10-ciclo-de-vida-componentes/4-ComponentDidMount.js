/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React, {Component} from 'react'

class Events extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  //? Ejemplo Agregar Event Listener
  componentDidMount(){
    window.addEventListener('resize', this.handleSize)
  }

  handleSize = () => {
    this.setState({ 
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  render(){
    return(
      <div>
        <h2>Events</h2>
        <h3>Window Size: { this.state.width } x { this.state.height }</h3>
      </div>
    )
  }
}

class Http extends Component {
  state = {
    photos: []
  }
  
  componentDidMount(){
    //? Ejemplo solicitud HTTP
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos => this.setState({ photos }))
  }

  render() {
    const  { photos } = this.state
    return (
      <div>
        {photos.map(photo => (
          <img
            key={photo.albumId}
            src={photo.thumbnailUrl}
            alt={photo.title}
          />
        ))}
      </div>
    )
  }
}

export default class App extends Component {
  //? El metodo componentDidMount se ejecuta luego de que se actualizan
  //? los elementos en el DOM, provocadas por el metodo render.
  //? Suele usarse para:
  //? Solicitudes HTTP
  //? Agregar Event Listeners
  componentDidMount(){

  }

  render(){
    return (
      <div>
        <h1>Metodo componentDidMount</h1>
        <Events/>
      </div>
    )
  }
}