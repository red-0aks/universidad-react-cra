/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React, {Component} from 'react'

const itemStyles = {
  padding: '1em', 
  borderBottom: '1px solid #CCC',
  marginTop: '0.4em'
}

class Item extends Component {
  handleClick = () => {
    this.props.onRemove(this.props.item)
  }
  //? Llamado para determinar si el cambio en los accesorios y el estado debería activar un re-renderizado.
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.item.id !== this.props.item.id
  }

  render(){
    const { item } = this.props

    console.log('Render 🔥 ' + item.text)

    return (
      <div style={itemStyles}>
        <button onClick={this.handleClick}>
          x
        </button>
        <span>
          { item.text }
        </span>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    list: []
  }

  agregar = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    const id = Math.random().toString(16)
    const pendiente = { text, id }
    this.setState(state => ({
      list: [
        ...state.list,
        pendiente
      ]
    }))

    e.target[0].value = ''
  }

  eliminar = (item) => {
    this.setState(state => ({
      list: state.list.filter(_item => item.id !== _item.id)
    }))
  }
  

  render(){
    return (
      <div>
        <h1>Metodo <span>ShouldComponentUpdate</span></h1>
        <form onSubmit={this.agregar}>
          <input type='text' placeholder='Ingresa un pendiente'/>
          <button>
            Agregar
          </button>
        </form>
        <div>
          {this.state.list.map(item => (
            <Item 
              key={ item.id }
              item={ item }
              onRemove={this.eliminar}
            />
          ))}
        </div>
      </div>
    )
  }
}