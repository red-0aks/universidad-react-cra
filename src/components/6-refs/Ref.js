/* 
   Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'

export default class Entrada extends React.Component {
   constructor(){
      super()

      this.entrada = React.createRef()
   }

   focus = () =>{
      this.entrada.current.focus()
   }

   blur = () =>{
      this.entrada.current.blur()
   }

   render(){
      return (
         <div>
            <h1>React Refs 🦄</h1>
            <input type='text' ref={this.entrada}/>
            <button onClick={this.focus}>
               Focus
            </button>
            <button onClick={this.blur}>
               Blur
            </button>
         </div>
      )
   }
}