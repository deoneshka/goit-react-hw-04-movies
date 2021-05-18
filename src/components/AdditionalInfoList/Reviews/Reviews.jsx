const Reviews = ({ reviews }) => {
    return (
        reviews && reviews.length ? (
            <ul >
                {reviews.map(({ id, content, author }) => (
                    <li key={id}>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>We don`t have any reviews for this movie.</p>
        )
        )
    }

export default Reviews;