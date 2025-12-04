import { useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Facilities from "../Components/Facilities"
import TeacherCard from "../Components/TeacherCard"
import Prospectus from "../Components/Prospectus"

const About = () => {
  const [isPaused, setIsPaused] = useState(false)

  const scrollCarousel = (direction) => {
    const carousel = document.querySelector('.teacher-carousel')
    if (carousel) {
      const scrollAmount = 400
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Narayani College</h1>
          <p className="text-xl text-blue-100">Emerging as a center of excellence for quality education and training</p>
        </div>
      </div>

      {/* Message from the Director Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Director Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5 bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-96">
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-48 h-48 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Director Message */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Message from the Director</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Building Tomorrow's Leaders
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Narayani College, where we are committed to nurturing the next generation of leaders, innovators, and change-makers. Our institution stands as a beacon of academic excellence and holistic development.
                </p>
                <p>
                  With over 15 years of dedicated service in higher education, we have consistently evolved to meet the changing demands of the global landscape. Our focus remains on providing quality education that combines theoretical knowledge with practical application.
                </p>
                <p>
                  We believe in fostering an environment where students can explore their potential, develop critical thinking skills, and prepare themselves for successful careers. Our experienced faculty, modern infrastructure, and industry partnerships ensure that our students receive the best possible education.
                </p>
                <p className="text-gray-900 font-medium italic">
                  "Education is not just about acquiring knowledge; it's about transforming lives and building a better future for our society."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div>
                  <p className="text-xl font-bold text-gray-900">Dr. Ramchandra Poudel</p>
                  <p className="text-blue-600 font-medium">Principal & Chief Executive</p>
                  <p className="text-sm text-gray-500 mt-1">Narayani College</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Prospectus />
      {/* Vision, Mission & Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Vision, Mission & Objectives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a center of excellence for quality education, innovative research, and professional development that produces globally competitive graduates who contribute positively to society.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education through innovative teaching-learning processes, foster research and entrepreneurship, and develop socially responsible individuals who contribute to national development.
              </p>
            </div>

            {/* Objectives Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Objectives</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>Deliver high-quality education in diverse disciplines</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>Promote research and innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>Build industry partnerships and internships</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span>Develop critical thinking and leadership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Facilities />

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principal Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Ramchandra Poudel</h3>
                <p className="text-blue-600 font-medium mb-4">Principal & Chief Executive</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Visionary leader with 15+ years in higher education, dedicated to fostering academic excellence and institutional growth.
                </p>
              </div>
            </div>

            {/* Academic Director Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Prof. Dr. Laxman Sigdel</h3>
                <p className="text-blue-600 font-medium mb-4">Academic Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Expert in curriculum development and academic innovation, ensuring quality standards across all programs.
                </p>
              </div>
            </div>

            {/* Administrative Head Card */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Mr. Sanjay Thapa</h3>
                <p className="text-blue-600 font-medium mb-4">Administrative Head</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Oversees institutional operations and student services with commitment to continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Section with Carousel and Arrow Controls */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Faculty</h2>
            <p className="text-gray-600 mt-2">Meet our experienced and dedicated teaching staff</p>
          </div>
        </div>

        {/* Carousel with Arrow Controls */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollCarousel('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200 group"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollCarousel('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200 group"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6 text-gray-700 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div 
            className="teacher-carousel flex overflow-x-auto scrollbar-hide scroll-smooth"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* First set of teachers */}
            <TeacherCard
              name="Dr. Prakash Sharma"
              designation="Associate Professor"
              department="Computer Science Department"
              qualification="Ph.D. in Computer Science, M.Tech"
              email="prakash.sharma@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                twitter: "#"
              }}
            />
            <TeacherCard
              name="Prof. Sunita Rai"
              designation="Professor"
              department="Business Administration"
              qualification="Ph.D. in Management, MBA"
              email="sunita.rai@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                facebook: "#"
              }}
            />
            <TeacherCard
              name="Er. Rajesh Thapa"
              designation="Senior Lecturer"
              department="Civil Engineering"
              qualification="M.E. in Structural Engineering"
              email="rajesh.thapa@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#"
              }}
            />
            <TeacherCard
              name="Dr. Anita Gurung"
              designation="Assistant Professor"
              department="Mass Communication"
              qualification="Ph.D. in Media Studies"
              email="anita.gurung@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                twitter: "#",
                facebook: "#"
              }}
            />
            <TeacherCard
              name="Mr. Bikash Shrestha"
              designation="Lecturer"
              department="Information Technology"
              qualification="M.Sc. in IT, CCNA"
              email="bikash.shrestha@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#"
              }}
            />
            <TeacherCard
              name="Dr. Meera Poudel"
              designation="Associate Professor"
              department="Computer Engineering"
              qualification="Ph.D. in Electronics, M.Tech"
              email="meera.poudel@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                twitter: "#"
              }}
            />

            {/* Duplicate set for infinite scroll effect */}
            <TeacherCard
              name="Dr. Prakash Sharma"
              designation="Associate Professor"
              department="Computer Science Department"
              qualification="Ph.D. in Computer Science, M.Tech"
              email="prakash.sharma@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                twitter: "#"
              }}
            />
            <TeacherCard
              name="Prof. Sunita Rai"
              designation="Professor"
              department="Business Administration"
              qualification="Ph.D. in Management, MBA"
              email="sunita.rai@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                facebook: "#"
              }}
            />
            <TeacherCard
              name="Er. Rajesh Thapa"
              designation="Senior Lecturer"
              department="Civil Engineering"
              qualification="M.E. in Structural Engineering"
              email="rajesh.thapa@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#"
              }}
            />
            <TeacherCard
              name="Dr. Anita Gurung"
              designation="Assistant Professor"
              department="Mass Communication"
              qualification="Ph.D. in Media Studies"
              email="anita.gurung@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                twitter: "#",
                facebook: "#"
              }}
            />
            <TeacherCard
              name="Mr. Bikash Shrestha"
              designation="Lecturer"
              department="Information Technology"
              qualification="M.Sc. in IT, CCNA"
              email="bikash.shrestha@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#"
              }}
            />
            <TeacherCard
              name="Dr. Meera Poudel"
              designation="Associate Professor"
              department="Computer Engineering"
              qualification="Ph.D. in Electronics, M.Tech"
              email="meera.poudel@narayanicollege.edu.np"
              socialMedia={{
                linkedin: "#",
                twitter: "#"
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About