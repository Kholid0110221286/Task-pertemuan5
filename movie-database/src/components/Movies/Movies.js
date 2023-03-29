/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import styles from "./Movies.module.css";

const Movies = () =>{
    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                    <div className={styles.movie}>
                        <img className={styles.movie__image}
                        src="https://picsum.photos/300/400"></img>
                        <h3 className={styles.movie__title}>Movie Title</h3>
                        <p className={styles.movie__date}>Date Title</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Movies;