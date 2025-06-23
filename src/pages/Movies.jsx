import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3000/movies'
    const fetchMovies = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setMovies(data)
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
                src={movie.image}
                alt={movie.name}
                className="w-full h-[500px] object-fit object-center"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">
                  {movie.name}
                </h2>
                <p className="text-sm text-gray-400">⭐ {movie.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Movies
