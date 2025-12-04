import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gray-900 text-white overflow-hidden h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src='/assets/college-campus-modern-building.jpg' 
            alt="College Campus" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            {/* Main Content */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Excellence in Education,
              <br />
              <span className="text-blue-300">Growth in Character</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
              Narayani College is a center of excellence offering quality education with industry partnerships, research opportunities, and career-focused programs.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/programs">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg">
                Explore Programs
              </button>
              </Link>
              <Link to="/about">
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 active:bg-gray-100 active:text-gray-900 text-white font-semibold rounded-lg transition-all duration-200">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
