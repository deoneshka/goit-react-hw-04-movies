import React, { Component } from 'react';
import API from '../../services/API';
import MovieList from '../../components/MovieList';
import Searchbar from '../../components/SearchBar/SearchBar';
import Loader from "react-loader-spinner";

class MoviesView extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: false
  }

  componentDidMount() {
    const searchParams = this.props.location.search;
    const parsedParams = new URLSearchParams(searchParams);
    const queryValue = parsedParams.get('query');

    if (queryValue) {
      this.setState({ query: queryValue });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      await API.fetchFilmsByQuery(query).then(movies => this.setState({ movies }));
      this.setState({ isLoading: false });
    }
  }
  
  onChangeQuery = query => {
    if (!query) return;
    this.setState({ query: query });
    this.props.history.push({
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {
          isLoading && <Loader
            type="Rings"
            color="#00BFFF"
            height={80}
            width={80} />
        }
        {
          movies.length > 1 && <MovieList movies={movies} />
        }
      </>
    )
  }

}

export default MoviesView;