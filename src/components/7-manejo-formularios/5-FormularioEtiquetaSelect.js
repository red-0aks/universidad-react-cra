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
    
export default class App extends React.Component {
  state = {
    tech: ''
  }

  handleChange = (event) => {
    this.setState({
      tech: event.target.value
    })
  }
  
  render(){
    return (
      <div>
        <h1>Etiqueta Select <Unicorn /></h1>
        <form>
          <select value={this.state.tech} onChange={this.handleChange}>
            <option value='Angular'>Angular</option>
            <option value='React'>React</option>
            <option value='Vue'>Vue</option>
            <option value='Vanilla'>Vanilla</option>
          </select>
        </form>
      </div>
    )
  }
}