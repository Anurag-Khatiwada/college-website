import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { newsData } from "../data/newsData"

const NewsDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  // Find the news item by slug
  const news = newsData.find(item => item.slug === slug)
  
  // Find previous and next news
  const currentIndex = newsData.findIndex(item => item.slug === slug)
  const previousNews = currentIndex > 0 ? newsData[currentIndex - 1] : null
  const nextNews = currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null

  // If news not found, redirect to news events page
  if (!news) {
    navigate('/news-events')
    return null
  }

  // Color coding for different types
  const typeColors = {
    Event: 'bg-purple-100 text-purple-700',
    News: 'bg-blue-100 text-blue-700',
    Announcement: 'bg-green-100 text-green-700'
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Image Banner */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/news-events" className="hover:text-blue-600">News & Events</Link>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-900">{news.category}</span>
          </nav>

          {/* Article Content */}
          <article className="bg-white rounded-xl shadow-md p-8 md:p-12">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${typeColors[news.type]}`}>
                {news.category}
              </span>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {news.date}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {news.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {news.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Related Documents */}
            {news.documents && news.documents.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Download Related Documents</h3>
                <div className="space-y-3">
                  {news.documents.map((doc, index) => (
                    <a
                      key={index}
                      href={doc.url}
                      className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    >
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-blue-700 font-medium">{doc.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Previous/Next Navigation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous */}
            {previousNews && (
              <Link 
                to={`/news-events/${previousNews.slug}`}
                className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Previous</p>
                  <p className="font-semibold text-gray-900 line-clamp-2">{previousNews.title}</p>
                </div>
              </Link>
            )}

            {/* Next */}
            {nextNews && (
              <Link 
                to={`/news-events/${nextNews.slug}`}
                className="flex items-center justify-end p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Next</p>
                  <p className="font-semibold text-gray-900 line-clamp-2">{nextNews.title}</p>
                </div>
                <svg className="w-8 h-8 text-blue-600 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {/* Back to News & Events */}
          <div className="mt-8 text-center">
            <Link 
              to="/news-events"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News & Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default NewsDetail
