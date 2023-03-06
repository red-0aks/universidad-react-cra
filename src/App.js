/* 
? Para probar, reemplazar todo el codigo en App.js 
*/


import React, { Component} from 'react'

class Timer extends Component {
  state = {
    time: 0,
    isPlaying: true
  }

  tick = null
  
  componentDidMount() {
    if(this.tick !== null){
      clearInterval(this.tick)
    }
    this.play()
  }

  componentWillUnmount() {
    //? Limpiar Intervals
    //? Limpiar event listeners
    //? Ejecutar algun metodo para que limpie algo del padre.
    this.props.onDestroy()
    clearInterval(this.tick)
  }

  play = () => {
    this.setState({ isPlaying: true })
    this.tick = setInterval(() => {
      this.setState(state => ({
        time: state.time + 1
      }))
    }, 1000);
  }
  
  pause = () => {
    this.setState({ isPlaying: false })
    clearInterval(this.tick)
  }

  toggle = () => {
    if(this.state.isPlaying){
      this.pause()
    } else {
      this.play()
    }
  }
  
  render() {
    const { time, isPlaying } = this.state
    return (
      <div>
        <h1>{time}</h1>
        <button onClick={this.toggle}>
          { isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    mostrar: true,
    mensaje: ''
  }

  desmontar = () => {
    this.setState({ mostrar: false })
  }
  
  toggle = () => {
    if(this.state.mostrar){
      this.setState({ mostrar: false })
    } else {
      this.setState({ mostrar: true })
    }
  }

  handleDestroy = () => {
    this.setState({ 
      message: 'El componente contador fue destruido'
    })
  }
  

  render(){
    const { mostrar } = this.state
    return (
      <div>
        <h1>Metodo <span>ComponentWillUnmount</span></h1>
        <h3>{this.state.message}</h3>
        <button onClick={this.toggle}>
          {mostrar ? 'Desmontar' : 'Montar'}
        </button>
        { this.state.mostrar && 
          <Timer onDestroy={this.handleDestroy}/>
        }
      </div>
    )
  }
}