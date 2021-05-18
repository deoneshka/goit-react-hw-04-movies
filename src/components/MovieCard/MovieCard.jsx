import styles from './MovieCard.module.css';

const MovieCard = ({ poster, title, genres, rating, releaseYear, overview }) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={poster} alt="Movie poster"></img>
            <div className={styles.container__info}>
                <h2 className={styles.movie__info__title}>{title} ({releaseYear})</h2>
                <p className={styles.movie__info}>User score: {rating}</p>
                <h3 className={styles.movie__info__title}>Overview</h3>
                <p className={styles.movie__info}>{overview}</p>
                <h3 className={styles.movie__info__title}>Genres</h3>
                <p className={styles.movie__info}>{genres}</p>
            </div>
        </div>
    )
}

export default MovieCard;