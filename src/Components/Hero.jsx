const Hero = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Excellence in Education,
                <br />
                <span className="text-blue-200">Growth in Character</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed max-w-xl">
                Kantipur City College is a center of excellence offering quality education with industry partnerships, research opportunities, and career-focused programs.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-lg transition-all duration-200">
                  Explore Programs
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/college-campus-modern-building.jpg" 
                  alt="Modern College Campus Building" 
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient for better image blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl -z-0"></div>
      </section>
    </div>
  )
}

export default Hero
