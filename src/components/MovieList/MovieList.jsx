import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
    return (
        <ul className={styles.movieList}>
            {
                movies.map(({ id, title }) => (
                    <li className={styles.movieList__item} key={id}>
                        <Link className={styles.movieList__link} to={{
                            pathname: `${routes.movies}/${id}`,
                            state: { from: location },
                        }}>
                            {title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default withRouter(MovieList);