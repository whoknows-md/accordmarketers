import React from 'react'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "AI Marketing Strategy Guide",
      excerpt: "Learn how to leverage AI for your marketing campaigns and maximize ROI.",
      date: "March 2024",
      category: "Strategy"
    },
    {
      id: 2,
      title: "SEO Optimization Tips",
      excerpt: "Discover the latest SEO techniques to improve your website rankings.",
      date: "February 2024",
      category: "SEO"
    },
    {
      id: 3,
      title: "Social Media Trends 2024",
      excerpt: "Stay ahead with the latest social media marketing trends and tactics.",
      date: "January 2024",
      category: "Social Media"
    }
  ]

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h1>
          <p className="text-xl text-gray-600">
            Insights and tips on digital marketing, AI, and business growth
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-40"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs