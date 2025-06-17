import Hero from '../components/Hero'

import movie1 from '../assets/12angryman.jpeg'
import movie2 from '../assets/darkknite.jpeg'
import movie3 from '../assets/godfather.jpeg'
import movie4 from '../assets/Schindler.jpg'
import movie5 from '../assets/shawshank.jpeg'
import movie6 from '../assets/thelordring.jpeg'

const Home = () => {
  const movies = [
    {
      title: 'The Shawshank Redemption',
      img: movie1,
      year: 1994,
      rating: '9.3',
    },
    { title: 'The Godfather', img: movie2, year: 1972, rating: '9.2' },
    { title: 'The Dark Knight', img: movie3, year: 2008, rating: '9.0' },
    { title: '12 Angry Men', img: movie4, rating: '9.3' },
    {
      title: 'The Lord of the Rings: The Return of the King',
      img: movie5,
      year: 1957,
      rating: '9.0',
    },
    { title: `Schindler's List`, img: movie6, year: 2003, rating: '9.1' },
  ]

  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <section className="py-20 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold mb-10 text-center">Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-300 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem recusandae accusantium obcaecati fugit ipsa, illum
                </p>
                <p className="text-gray-300 text-bold">{movie.year}</p>
                <p className="text-gray-300 text-bold">⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
