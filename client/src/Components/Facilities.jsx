import React from "react"

const Facilities = () => {
  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      title: "Digital Library",
      description:
        "Comprehensive collection of academic resources, journals, and digital databases accessible to all students and faculty.",
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      title: "Modern Laboratories",
      description:
        "State-of-the-art labs equipped with latest technology for hands-on learning in computer science, engineering, and research.",
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      title: "Computer Labs",
      description:
        "Well-equipped computer labs with modern hardware and software for practical training and project development.",
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
      title: "Mentorship Program",
      description:
        "Dedicated student support services including academic guidance, career counseling, and personal development.",
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      title: "Campus Wi-Fi",
      description:
        "High-speed internet connectivity throughout the campus enabling seamless learning and collaboration.",
    },
    {
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=80",
      title: "Research Center",
      description:
        "Dedicated research facilities supporting faculty and student projects, publications, and scholarly activities.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Facilities & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => {
            return (
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover md:transform md:group-hover:scale-110 md:transition-transform md:duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {facility.description}
                  </p>
                </div>

                {/* Hover Border Effect - only on desktop */}
                <div className="absolute inset-0 border-2 border-transparent md:group-hover:border-blue-500 transition-colors duration-300 rounded-xl"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Facilities
