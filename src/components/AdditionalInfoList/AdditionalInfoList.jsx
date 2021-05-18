import Cast from '../../components/AdditionalInfoList/Cast';
import Reviews from '../../components/AdditionalInfoList/Reviews';
import { Route, NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AdditionalInfoList.module.css';

const AdditionalInfoList = ({ cast, reviews, location, match }) => {
    return (
        <div>
            <h3 className={styles.title}>Additional information</h3>
            <ul className={styles.additionalList}>
                <li className={styles.additionalList__item}>
                    <NavLink
                        to={{
                            pathname: `${match.url}/cast`,
                            state: { from: location?.state?.from || routes.movies },
                        }}
                        className={styles.additionalList__link}
                        activeClassName={styles.additionalList__link_active}
                    >
                        Cast
                    </NavLink>
                </li>
                <li className={styles.additionalList__item}>
                    <NavLink
                        to={{
                            pathname: `${match.url}/reviews`,
                            state: { from: location?.state?.from || routes.movies },
                        }}
                        className={styles.additionalList__link}
                        activeClassName={styles.additionalList__link_active}
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <Route path={`${match.path}/cast`} render={() => <Cast cast={cast} />} />
            <Route path={`${match.path}/reviews`} render={() => <Reviews reviews={reviews} />} />
        </div>
    )
}

export default AdditionalInfoList;