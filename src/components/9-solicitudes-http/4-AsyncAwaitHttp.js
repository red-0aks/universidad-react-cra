/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
  state = {
    movie: {},
    foundMovie: false
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/'
    
    const res = await axios.get(url, { 
      params: { 
        apikey: 'a685323d',
        t: title 
      }
    })
    
    this.setState({ 
      movie: res.data, 
      foundMovie: true 
    })
  }

  render(){
    const { movie } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            placeholder='Nombre de pelicula'
          />
          <button>
            Buscar
          </button>
          { this.state.foundMovie && (
            <div>
              <h1>
                {movie.Title}
              </h1>
              <p>
                {movie.Plot}
              </p>
              <img 
                src={movie.Poster} 
                alt='Poster'
                style={{
                  width: '200px'
                }}
              />
            </div>
          )}
        </form>
      </div>
    )
  }
}