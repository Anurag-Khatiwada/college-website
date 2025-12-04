import { Link } from 'react-router-dom'
import { Info, BookOpen, Newspaper, Mail } from 'lucide-react'

const QuickLinks = () => {
  const links = [
    {
      icon: Info,
      title: "About Us",
      description: "Learn about our history, mission, and values",
      path: "/about",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Programs",
      description: "Explore our academic programs and courses",
      path: "/programs",
      color: "blue"
    },
    {
      icon: Newspaper,
      title: "News & Events",
      description: "Stay updated with latest news and events",
      path: "/news-events",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Contact Us",
      description: "Get in touch with our admissions team",
      path: "/contact",
      color: "blue"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                to={link.path}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {link.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {link.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default QuickLinks
