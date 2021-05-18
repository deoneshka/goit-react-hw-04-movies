import defaultImageActor from '../../../images/defaultImageActor.png';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
    console.log(cast.character);
    return (
        cast && cast.length ? (
            <ul className={styles.castsList}>
                {cast.map(({ profile_path, cast_id, name, character }) =>
                    <li className={styles.castCard} key={cast_id}>
                        <img
                            className={styles.castCardImage}
                            src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : defaultImageActor}
                            alt={`Profile ${name}`} />
                        <h3 className={styles.castCardName}>{name}</h3>
                        <p>Character: {character ? character : 'N/A'}</p>
                    </li>)}
            </ul >
            )
            : (
                <p>No cast information</p>
            )
    )
}

export default Cast;