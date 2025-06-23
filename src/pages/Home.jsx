import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const Home = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('http://localhost:3000/movies')
        const data = await res.json()

        const selectedMovies = data.slice(9, 17)
        setMovies(selectedMovies)
      } catch (err) {
        console.error('Failed to fetch movies:', err)
      }
    }

    fetchMovies()
  }, [])

  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <section className="py-20 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold mb-10 text-center">Popular Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition block"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-72 object-fit"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.name}</h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {movie.description}
                </p>
                <p className="text-gray-400 mt-2">📅 {movie.releasedYear}</p>
                <p className="text-yellow-400 font-semibold">
                  ⭐ {movie.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
