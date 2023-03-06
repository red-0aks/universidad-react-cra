/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React, {Component} from 'react'
import { faker } from '@faker-js/faker'

const chatStyle = {
  width: '90%',
  height: 600,
  overflow: 'auto',
  margin: '1rem auto',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#a7b8ba',
}

const messageStyle = {
  margin: '0.5rem 0',
  padding: '1rem 1rem',
  backgroundColor: '#c7e8ec',
  borderRadius: '1rem'
}

const avatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '100%'
}

class Chat extends Component {
  box = React.createRef()

  getSnapshotBeforeUpdate(){
    const box = this.box.current
    return box.scrollTop + box.offsetHeight + 17.6 >= box.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const box = this.box.current

    if(snapshot){
      box.scrollTop = box.scrollHeight
    }
  }
  
  render(){
    return (
      <div 
        className='chat-style'
        style={chatStyle}
        ref={this.box}
      >
        {this.props.list.map(item => (
          <div style={messageStyle} key={item.id}>
            <div></div>
            <div className='flex'>
              <img style={avatarStyle} src={item.avatar} alt={item.name}/>
              <h3>{ item.name }</h3>
            </div>
            <p>{ item.message }</p>
          </div>
        ))}
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    list: []
  }

  addMessage = () => {
    // Crear mensaje falsop
    const message = {
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase()
    }

    // Agregar mensaje a la lista
    this.setState(state => ({
      list: [
        ...state.list,
        message
      ]
    }))
  }
  render(){

    return (
      <div>
        <h1>Metodo <span>getSnapshotBeforeUpdate</span></h1>
        <Chat
          list={ this.state.list }
        />
        <button onClick={this.addMessage}>
          New Message
        </button>
      </div>
    )
  }
}