import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[rgb(28,37,50)] py-12 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded shadow">
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full mb-4 p-3 border rounded"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-3 rounded hover:bg-gray-800 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
