/* 
   Para probar, reemplazar todo el codigo en App.js 
*/
import React from 'react'

const FancyInput = React.forwardRef((props, ref) => {
   return(
      <div>
         <input type='text' ref={ref}/>
      </div>
   )
})

export default class App extends React.Component {
   entrada = React.createRef()

   componentDidMount () {
      console.log(this.entrada)
   }
   render(){
      return (
         <div>
            <h1>Reenvio de Refs</h1>
            <FancyInput 
                ref={this.entrada}
            />
         </div>
      )
   }
}