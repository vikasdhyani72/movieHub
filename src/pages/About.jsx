const About = () => {
  return (
    <section className="bg-[rgb(28,37,50)] text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-red-500">MovieHub</span>
          </h2>
          <p className="text-gray-300 mb-4">
            <span className="text-red-500">MovieHub</span> is your ultimate
            platform to discover and explore trending movies from around the
            world. Whether you are a casual viewer or a movie buff, we have
            something for everyone.
          </p>
          <p className="text-gray-300 mb-6">
            Built with React and Tailwind CSS, this project demonstrates a
            modern, responsive, and clean movie info website — showcasing how
            you can fetch real data using APIs and display it beautifully.
          </p>
          <p className="text-gray-300">
            Enjoy browsing, find your favorites, and stay tuned for more
            features coming soon!
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1709484220277-4554c9a6a002?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBodWIlMjBpbGx1c3RyYXRpb258ZW58MHx8MHx8fDA%3D"
            alt="Movie Hub Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
