import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const API_KEY = 'a0c82a90207acc4bdc5caa9bab9a9633'
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
        const data = await response.json()
        setMovies(data.results)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className="p-8 bg-[rgb(28,37,50)]">
      <h1 className="text-3xl font-bold mb-6 text-gray-300">Popular Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-400">⭐ {movie.vote_average}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Movies
