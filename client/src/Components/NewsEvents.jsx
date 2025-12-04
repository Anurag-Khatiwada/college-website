const NewsEvents = () => {
  const newsItems = [
    {
      date: "February 2025",
      title: "International Conference on AI and Engineering (ICAE 2025)",
      description: "KCC hosts an international conference exploring challenges and opportunities in artificial intelligence and engineering education.",
      image: "/college-campus-modern-building.jpg",
      alt: "Conference"
    },
    {
      date: "January 2025",
      title: "Narayani College Signs MOU with IMS Group",
      description: "Strategic partnership with IMS Group to enhance academic opportunities and industry collaboration for our students.",
      image: "/college-campus-modern-building.jpg",
      alt: "MOU Signing"
    },
    {
      date: "December 2024",
      title: "Conference on Gender Justice and Transforming Masculinities",
      description: "KCC concludes successful conference fostering dialogue on gender equality and social responsibility in higher education.",
      image: "/college-campus-modern-building.jpg",
      alt: "Gender Justice Conference"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Latest News & Events
            </h2>
            <p className="text-gray-600">
              Stay updated with KCC activities and announcements
            </p>
          </div>
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 group"
          >
            <span>View All</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group"
                >
                  <span>Read More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents
