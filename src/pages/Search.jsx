import "./MovieGrid.css"

import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"


//COMPONENTS
import MovieCard from "../componentes/MovieCard"


const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")


    const searchedMovies = async (url) => {

        const res = await fetch(url)

        const data = await res.json()

        setMovies(data.results)

    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        searchedMovies(searchWithQueryURL);
      }, [query]);

    return(
        <div className="container">
         
         <h1 className="title">
            Resultados de: <span className="query-text">{query}</span>
         </h1>

         <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movies) => <MovieCard key={movies.id} movie={movies} />)}
      </div>
        </div>
    )
}

export default Search