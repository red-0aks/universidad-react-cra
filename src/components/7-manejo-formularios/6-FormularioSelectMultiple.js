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
    techs: ['Vue']
  }

  handleChange = (event) => {
    const techs = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    )
    
    this.setState({ techs })
  }
  
  render(){
    return (
      <div>
        <h1>Etiqueta Select <Unicorn /></h1>
        <form>
          <select 
            value={this.state.tech} 
            onChange={this.handleChange}
            multiple
          >
            <option value='Angular'>Angular</option>
            <option value='React'>React</option>
            <option value='Vue'>Vue</option>
            <option value='Vanilla'>Vanilla</option>
          </select>
          <ul>
            {this.state.techs.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </form>
      </div>
    )
  }
}