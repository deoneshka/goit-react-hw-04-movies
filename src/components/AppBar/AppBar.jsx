import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './AppBar.module.css';

const AppBar = () => (
  <ul className={styles.navigation}>
    <li className={styles.navigation__item}>
      <NavLink
        exact
        to={routes.home}
        className={styles.navigation__link}
        activeClassName={styles.navigation__link_active}
      >
        home
      </NavLink>
    </li>
    <li className={styles.navigation__item}>
      <NavLink
        to={routes.movies}
        className={styles.navigation__link}
        activeClassName={styles.navigation__link_active}
      >
        movies
      </NavLink>
    </li>
  </ul>
);

export default AppBar;