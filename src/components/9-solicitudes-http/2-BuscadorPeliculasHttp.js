/* 
? Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'

export default class App extends React.Component {
  state = {
    movie: {},
    foundMovie: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const url = 'http://www.omdbapi.com/?apikey=a685323d'
    fetch(url + '&t=' + title)
      .then(res => res.json())
      .then(movie => { 
        this.setState({ movie, foundMovie: true })
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
          {this.state.foundMovie && 
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
          }
        </form>
      </div>
    )
  }
}