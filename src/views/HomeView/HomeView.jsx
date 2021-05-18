import React, { Component } from 'react';
import API from '../../services/API';
import MovieList from '../../components/MovieList';
import styles from './HomeView.module.css';

class HomeView extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    await API.fetchPopularFilms().then(movies => this.setState({ movies }));
  }

  render() {

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Trending today</h2>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }

}

export default HomeView;