import React from 'react'

export default class FruitCard extends React.Component {
   constructor () {
      super()

      this.agregar = this.agregar.bind(this)
      this.quitar = this.quitar.bind(this)

      const methods = [
         'agregar',
         'quitar',
         'limpiar'
      ]

      methods.forEach( m =>{
         this[m] = this[m].bind(this)
      })
      
      this.state = {
         cantidad: 0
      }
   }
   
   agregar(){
      this.setState({ cantidad: this.state.cantidad + 1 })
   }

   quitar(){
      this.setState({ cantidad: this.state.cantidad - 1 })
   }

   limpiar(){
      this.setState({ cantidad: 0})
   }

   render(){
      return (
         <div className='card'>
            <h2>{ this.props.name }</h2>
            <p>Cantidad: { this.state.cantidad }</p>
            <p>$ { this.props.price }</p>
            <div className='buttons'>
               <button onClick={() => { this.agregar() }}>+</button>
               <button onClick={() => { this.quitar() }}>-</button>
               <button onClick={() => { this.limpiar() }}>limpiar</button>
            </div>
         </div>
      )
   }
}