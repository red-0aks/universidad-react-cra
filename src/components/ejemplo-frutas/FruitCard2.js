import React from 'react'
import './FruitCard.css'

export default class FruitCard extends React.Component {
   state = {
      cantidad: 0
   }
   
   agregar = () => {
      this.setState({ cantidad: this.state.cantidad + 1 })
   }

   quitar = () => {
      this.setState({ cantidad: this.state.cantidad - 1 })
   }

   limpiar = () => {
      this.setState({ cantidad: 0})
   }

   render(){
      const hasItems = this.state.cantidad > 0
      const cssClases = `fruit-card ${hasItems ? 'fruit-card-active' : ''}`


      return (
         <div className={cssClases}>
            <h2>{ this.props.name }</h2>
            <p>$ { this.props.price }</p>  
            <p>Cantidad: { this.state.cantidad }</p>
            <div className='buttons'>
               <button onClick={() => { this.agregar() }}>+</button>
               <button onClick={() => { this.quitar() }}>-</button>
               <button onClick={() => { this.limpiar() }}>limpiar</button>
            </div>
            {hasItems &&
               <p>
                  Total ${this.state.cantidad * this.props.price}
               </p>
            }
         </div>
      )
   }
}