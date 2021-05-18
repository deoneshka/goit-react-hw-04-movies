import { Component } from 'react';
import styles from './SearchBar.module.css';

class Searchbar extends Component {
    state = {
        query: ''
    };

    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        const { query } = this.state;

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    value={query}
                    onChange={this.handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies..."
                />
                <button className={styles.button} type="submit">
                    Search
                </button>
            </form>
        );
    }
}

export default Searchbar;