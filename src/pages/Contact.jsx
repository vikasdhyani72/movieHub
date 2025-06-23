import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('https://formspree.io/f/mqabylny', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      alert('Something went wrong! Please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[rgb(28,37,50)] py-12 flex items-center justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-white font-bold mb-6 text-center">
          Contact Us
        </h2>

        {submitted && (
          <p className="text-green-400 text-center mb-4">
            Thank you! Your message has been sent.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-200 p-6 rounded shadow"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded"
            rows="5"
            required
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
