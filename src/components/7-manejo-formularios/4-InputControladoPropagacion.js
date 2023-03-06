/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'

const Unicorn = () => {
  return (
    <span role='img' aria-label='unicornio'>
    🦄
    </span>
    )
  }
  
class InputControlado extends React.Component {
    
  state = {
    text: '',
    tieneError: false,
    color: '#E8E8E8'
  }
    
  actualizar = (event) => {
    const text = event.target.value
    let color = 'green'
    
    if(text.trim() === ''){
      color = 'E8E8E8'
    }
    if(text.trim() !== '' && text.trim().length < 5){
      color = 'red'
    }
    
    this.setState({ text, color })
    
    //? Propagando datos al padre
    this.props.onChange(this.props.name, text)
  }
    
  render(){
    const styles = {
      border: `2px solid ${this.state.color}`,
      padding: '0.3em 0.6em',
      outline: 'none'
    }
    
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          value={this.state.text}
          onChange={this.actualizar}
          style={styles}
          placeholder={this.props.placeHolder}
        />
        <button>
          Enviar
        </button>
      </form>
    )
  }
      
}
    
export default class App extends React.Component {
  state = {
    name: '',
    email: ''
  }

  /* 
    ?Al usar notacion de corchetes, permite a React saber que propiedad del estado se busca actualizar
  */
  actualizar = (name, text) => {
    this.setState({
      [name]: text
    })
  }
  render(){
    const styles = {
      color: 'lightBlue'
    }

    return (
      <div>
        <h1>Input Controlados <Unicorn /></h1>
        <InputControlado 
          onChange={this.actualizar}
          name='name'
          placeHolder='Nombre Completo'
        />
        <InputControlado 
          onChange={this.actualizar}
          name='email'
          placeHolder='Tu Email'
        />
        <h2>Nombre: <span style={styles}>{this.state.name}</span></h2>
        <h2>Email: <span style={styles}>{this.state.email}</span></h2>
      </div>
    )
  } 
}