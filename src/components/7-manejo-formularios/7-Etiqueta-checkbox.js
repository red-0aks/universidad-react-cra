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
    active: true
  }

  handleChange = (event) => {
    this.setState({
      active: event.target.checked
    })
  }

  render(){
    const { active } = this.state

    return (
      <div>
        <form>
          <input 
            type='checkbox' 
            checked={this.state.active}
            onChange={this.handleChange}  
          />
        </form>
        { active && (
          <h1>Etiqueta Checkbox <Unicorn /></h1>
        )}
      </div>
    )
  }
}