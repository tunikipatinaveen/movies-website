import React, { Component } from 'react';
import Card from './card';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      activeID: '',
      filterMovies: []
    }
  }


  async componentDidMount() {
    const response = await fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=war`);
    const json = await response.json();
    this.setState({ movies: json.Search });
  }

  render() {
    return (<div>
      <h1 className='heading'>Trending Movies</h1>
      <input className='search-bar' type="text" placeholder="Enter Movie Name ......." onChange={(e) => {
        let filterMovie = this.state.movies.filter((item) => item.Title.toLowerCase().includes(e.target.value))
        this.setState({ filterMovies: filterMovie })
      }} />

      <Card movies={this.state.filterMovies.length > 0 ? this.state.filterMovies : this.state.movies} />

    </div>);
  }
}

export default App;