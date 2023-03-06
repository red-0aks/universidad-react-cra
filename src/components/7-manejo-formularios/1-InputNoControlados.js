import React from 'react'

const Unicorn = () => {
   return (
      <span role='img' aria-label='unicornio'>
         🦄
      </span>
   )
}

class InputNoControlado extends React.Component {
   nombre = React.createRef()
   email = React.createRef()

   handleClick = () => {
      const nombre = this.nombre.current.value
      const email = this.email.current.value

      this.props.onSend({ nombre, email })
   }

   render(){
      return(
         <div>
            <input 
               type='text' 
               ref={this.nombre}
               placeholder='Nombre'
            />
            <input 
               type='text' 
               ref={this.email}
               placeholder='Email'   
            />
            <button onClick={this.handleClick}>
               Enviar
            </button>
         </div>
      )
   }

}

export default class App extends React.Component {
   send = (data) => {
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