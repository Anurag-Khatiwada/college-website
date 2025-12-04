import { useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import GalleryCard from "../Components/GalleryCard"
import { galleryData } from "../data/galleryData"

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Photos")

  // Get unique categories
  const categories = ["All Photos", ...new Set(galleryData.map(item => item.category))]

  // Filter gallery items based on selected category
  const filteredGallery = selectedCategory === "All Photos" 
    ? galleryData 
    : galleryData.filter(item => item.category === selectedCategory)

  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the vibrant campus life, modern facilities, and academic excellence at Narayani College
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredGallery.map((item) => (
              <div key={item.id} className="break-inside-avoid">
                <GalleryCard
                  image={item.image}
                  title={item.title}
                  height={item.height}
                />
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 text-lg">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Gallery
