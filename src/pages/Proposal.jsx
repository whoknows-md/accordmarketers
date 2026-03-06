import React, { useState } from 'react'

const Proposal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will review your proposal and get back to you soon.')
    setFormData({ name: '', email: '', company: '', budget: '', message: '' })
  }

  return (
    <section className="pt-20 py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get Your Custom Proposal
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your project and we'll create a tailored marketing solution for your business
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="john@example.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Company"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Monthly Budget *
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select a budget range</option>
                <option value="under-2k">Under $2,000</option>
                <option value="2k-5k">$2,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="above-25k">$25,000+</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">
                Tell us about your project *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder="Describe your marketing challenges, goals, and what you're looking for in a marketing partner..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-4 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Submit Proposal Request
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm pt-4">
              We'll review your request and reach out within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Proposal