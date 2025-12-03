import React from "react"
import { BookOpen, FlaskConical, Users, Wifi, Monitor, Award } from "lucide-react"

const Facilities = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Digital Library",
      description:
        "Comprehensive collection of academic resources, journals, and digital databases accessible to all students and faculty.",
    },
    {
      icon: FlaskConical,
      title: "Modern Laboratories",
      description:
        "State-of-the-art labs equipped with latest technology for hands-on learning in computer science, engineering, and research.",
    },
    {
      icon: Monitor,
      title: "Computer Labs",
      description:
        "Well-equipped computer labs with modern hardware and software for practical training and project development.",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description:
        "Dedicated student support services including academic guidance, career counseling, and personal development.",
    },
    {
      icon: Wifi,
      title: "Campus Wi-Fi",
      description:
        "High-speed internet connectivity throughout the campus enabling seamless learning and collaboration.",
    },
    {
      icon: Award,
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
            const Icon = facility.icon
            return (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Facilities
