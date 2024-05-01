import { useState, useEffect } from "react"
import MovieCard from "../componentes/MovieCard"
import "./MovieGrid.css"

const apiKey = import.meta.env.VITE_API_KEY
const moviesUrl = import.meta.env.VITE_API



const Home = () => {

    const [topMovies, setTopMovies] = useState([])

   const topRated = async (url) => {

    const res = await fetch(url)

    const data = await res.json()

    setTopMovies(data.results)

   }

   useEffect(() => {

    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`


    topRated(topRatedUrl)


   }, [])

    return(
        <div className="container">
         
         <h1 className="title">Melhores Filmes</h1>

         <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movies) => <MovieCard key={movies.id} movies={movies} />)}

         </div>
        </div>
    )
}

export default Home