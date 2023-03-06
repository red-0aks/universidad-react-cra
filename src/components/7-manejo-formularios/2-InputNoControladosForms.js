/* 
   ? Para probar, reemplazar todo el codigo en App.js 
*/

/*  
   ? INPUTS NO CONTROLADOS
   * VENTAJA: todo el codigo es facil de mantener y desarrollar y esta mas cercano al manejo del dom tradicional.
   ! DESVENTAJA: La informacion extraida no se puede revisar mientras va cambiando, ya que se debe esperar a que esta sea enviada.
*/

import React from 'react'

const Unicorn = () => {
   return (
      <span role='img' aria-label='unicornio'>
         🦄
      </span>
   )
}

class InputNoControlado extends React.Component {
   handleSubmit = (event) => {
      event.preventDefault()
      const nombre = event.target[0].value
      const email = event.target[1].value

      this.props.onSend({ nombre, email  })
   }

   render(){
      return(
         <form onSubmit={this.handleSubmit}>
            <input 
               type='text' 
               placeholder='Nombre'
            />
            <input 
               type='text' 
               placeholder='Email'   
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
            <h1>Inputs no controlados <Unicorn /></h1>
            <InputNoControlado 
               onSend={this.send}
            />
         </div>
      )
   }
}