import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {
    const url = `http://localhost:3000/movies/${id}`
    const fetchMovie = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setMovie(data)
      } catch (error) {
        console.error('Error fetching movie detail:', error)
      }
    }

    fetchMovie()
  }, [id])

  if (!movie) return <div className="p-8 text-white">Loading...</div>

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div
        className="w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold mb-2">{movie.name}</h1>
          <p className="text-sm">
            ⭐ {movie.rating} | 📅 {movie.releasedYear}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full md:w-1/3 rounded shadow-lg object-fit h-[500px]"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">Movie Details</h2>

          <p className="mb-6 text-lg text-gray-300">{movie.description}</p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold">Title:</span> {movie.name}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {movie.rating}
            </p>
            <p>
              <span className="font-semibold">Released Year:</span> 📅{' '}
              {movie.releasedYear}
            </p>
          </div>

          <div className="mt-8 space-x-4">
            <button
              onClick={() => setShowTrailer(!showTrailer)}
              className="px-6 py-2 bg-green-600 rounded hover:bg-green-700 transition"
            >
              {showTrailer ? 'Hide Trailer' : 'Watch Trailer'}
            </button>
          </div>

          {showTrailer && (
            <div className="mt-8 aspect-video">
              <iframe
                src={movie.trailer.replace('watch?v=', 'embed/')}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
