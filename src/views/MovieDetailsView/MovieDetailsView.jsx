import React, { Component } from 'react';
import API from '../../services/API';
import MovieCard from '../../components/MovieCard';
import Button from '../../components/Button';
import AdditionalList from '../../components/AdditionalInfoList';
import routes from '../../routes';
import defaultPoster from '../../images/defaultPoster.png';
import Loader from "react-loader-spinner";

class MovieDetailsView extends Component {
    state = {
        poster: null,
        title: null,
        rating: null,
        releaseYear: null,
        overview: null,
        genres: null,
        cast: null,
        reviews: null,
        isLoading: false
    }

    async componentDidMount() {
        const { movieId } = this.props.match.params;
        this.setState({ isLoading: true });

        await API.fetchFilmDetailsById(movieId)
            .then(({ poster_path, title, genres, release_date, overview, vote_average, credits, reviews }) =>
                this.setState({
                    poster: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPoster,
                    title: title,
                    rating: vote_average ? `${10 * vote_average} %` : 'No votes yet',
                    releaseYear: release_date.split('-')[0],
                    overview: overview,
                    genres: genres.map(item => item.name).join(', '),
                    cast: credits.cast,
                    reviews: reviews.results
                })
        )

        this.setState({ isLoading: false });
    }

    handleGoBack = () => {
        const { location, history } = this.props;
        history.push(location?.state?.from || routes.movies);
    };

    render() {
        const { poster, title, genres, rating, releaseYear, overview, cast, reviews, isLoading } = this.state;
        const { location, match } = this.props;

        return (
            <>
                <Button onClick={this.handleGoBack} />
                {
                    isLoading && <Loader
                        type="Rings"
                        color="#00BFFF"
                        height={80}
                        width={80} />
                }
                {
                    poster && <MovieCard
                    poster={poster}
                    title={title}
                    genres={genres}
                    rating={rating}
                    releaseYear={releaseYear}
                    overview={overview}
                />
                }
                {
                    poster && <AdditionalList cast={cast} reviews={reviews} location={location} match={match}/>
                }
            </>
        )
    }
}

export default MovieDetailsView;