import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-black to-gray-800 text-white flex flex-col justify-center items-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Welcome to <span className="text-red-500">MovieHub</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-xl mb-6">
        Find reviews and information about your favorite movies.
      </p>
      <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition">
        <Link to="/movies">Browse Movies</Link>
      </button>
    </section>
  )
}

export default Hero
