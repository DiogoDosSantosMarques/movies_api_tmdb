import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"

//pages
import Home from './pages/Home.jsx'
import Movie from "./pages/Movie.jsx"
import Search from "./pages/Search.jsx"




import './index.css'
import NavBar from './componentes/NavBar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

    <NavBar />

    <Routes>

      <Route path='/' element={<Home />} />

      <Route path='/movie/:id' element={<Movie />} />

      <Route path='/search' element={<Search />} />

    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
