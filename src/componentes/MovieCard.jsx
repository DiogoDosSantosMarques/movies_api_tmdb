import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";




const movieImg = import.meta.env.VITE_IMG

const MovieCard = ({movies, showLink = true}) => {

    return(
        <div className="movie-card">

            <img src={movieImg + movies.poster_path} alt={movies.title} />
            <h2>{movies.title}</h2>
            
            <p>
                <FaStar /> {movies.vote_average}
            </p>

            {showLink && <Link to={`/movie/${movies.id}`}>Detalhes</Link>}

        </div>
    )
}

export default MovieCard