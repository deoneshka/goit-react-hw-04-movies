import styles from './Button.module.css';

const Button = ({ onClick }) => {
    return (
        <button className={styles.button} onClick={onClick} type='button'>Go back</button>
    )
}

export default Button;