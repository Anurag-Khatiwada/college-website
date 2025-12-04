import { useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import NewsCard from "../Components/NewsCard"
import { newsData } from "../data/newsData"

const NewsEvents = () => {
  const [selectedType, setSelectedType] = useState("All")

  // Get unique types
  const types = ["All", "Announcements", "News", "Events"]

  // Filter news based on selected type
  const filteredNews = selectedType === "All" 
    ? newsData 
    : newsData.filter(item => {
        if (selectedType === "Announcements") return item.type === "Announcement"
        if (selectedType === "News") return item.type === "News"
        if (selectedType === "Events") return item.type === "Event"
        return true
      })

  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest announcements, news, events, and important notices from Narayani College
          </p>
        </div>
      </div>

      {/* News & Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-gray-700 font-semibold">Filter by Type</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Latest News & Events Header */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest News & Events
          </h2>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-600 text-lg">No news or events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default NewsEvents
