import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const API_KEY = 'a0c82a90207acc4bdc5caa9bab9a9633'
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        )
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
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded">
          <h1 className="text-5xl font-bold mb-2">{movie.title}</h1>
          {movie.tagline && (
            <p className="italic text-lg text-gray-300 mb-2">
              "{movie.tagline}"
            </p>
          )}
          <p className="text-sm">
            ⭐ {movie.vote_average} | ⏱️ {movie.runtime} min | 📅{' '}
            {movie.release_date}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded shadow-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="mb-6">{movie.overview}</p>

          {/* Genres */}
          <h3 className="text-2xl font-semibold mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-red-600 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Homepage */}
          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Visit Official Website
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
