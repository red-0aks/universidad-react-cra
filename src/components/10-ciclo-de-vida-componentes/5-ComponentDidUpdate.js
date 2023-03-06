/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React, {Component} from 'react'

class UserDetails extends Component {
  state = {
    user: {}, 
    isFetching: false
  }
  componentDidMount(){
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate', prevProps, this.props)
    
    if(prevProps.userId !== this.props.userId){
      this.fetchData()
    }
  }

  fetchData(){
    this.setState({ 
      isFetching: true 
    })
    const URL = `https://jsonplaceholder.typicode.com/users/${this.props.userId}`
    fetch(URL)
      .then(res => res.json())
      .then(user => this.setState({ user, isFetching: false }))
  }

  render(){
    return (
      <div>
        <h2>User details</h2>
        { this.state.isFetching 
          ? <h1>Cargando... 💿</h1>
          : (
            <pre>
              { JSON.stringify(this.state.user, null, 4)}
            </pre>
          )
        }
      </div>
    )
  }
}

export default class App extends Component {
  //? Similar a componentDidUpdate.
  //? Se ejecuta cada vez que el componente se actualiza.
  //? Cada vez que se reciban nuevas props, se actualice el state o se haga forceUpdate.
  state = {
    id: 1
  }

  aumentar = () => {
    if(this.state.id !== 10){
      this.setState(state => ({
        id: state.id + 1
      }))
    }
  }

  disminuir = () => {
    if(this.state.id !== 1){
      this.setState(state => ({
        id: state.id - 1
      }))
    }
  }

  render(){
    const { id } = this.state
    return (
      <div>
        <h1>Metodo componentDidUpdate</h1>
        <div className='flex'>
          <button onClick={this.disminuir}>
            Anterior
          </button>
          <button onClick={this.aumentar}>
            Siguiente
          </button>
        </div>
        <UserDetails
          userId={id}
        />
      </div>
    )
  }
}