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
            />
            <button>
               Enviar
            </button>
         </form>
      )
   }
}

export default class App extends React.Component {
   
   send = (data) =>{
      console.log(data)
   }
   render(){
      return (
         <div>
            <h1>Input Controlados <Unicorn /></h1>
            <InputControlado 
               onSend={this.send}
            />
         </div>
      )
   }
}