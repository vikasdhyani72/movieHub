import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl sm:text-2xl font-bold">
          <Link to="/">
            <span className="text-red-500">MovieHub</span>
          </Link>
        </h1>
        <nav className="space-x-3 sm:space-x-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link to="/movies" className="hover:text-red-500">
            Movies
          </Link>
          <Link to="/about" className="hover:text-red-500">
            About
          </Link>
          <Link to="/contact" className="hover:text-red-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
