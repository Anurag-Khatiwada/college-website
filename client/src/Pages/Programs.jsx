import { useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import ProgramCard from "../Components/ProgramCard"

const Programs = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("All")

  const programsData = [
    {
      programId: "bca",
      level: "Undergraduate",
      title: "Bachelor of Computer Application",
      abbreviation: "BCA",
      duration: "4 Years",
      faculty: "Science & Technology",
      description: "Comprehensive program covering software development, database management, web technologies, and application design.",
      skills: ["Core IT Skills", "Software Development"],
      moreSkillsCount: 2
    },
    {
      programId: "bba",
      level: "Undergraduate",
      title: "Bachelor of Business Administration",
      abbreviation: "BBA",
      duration: "4 Years",
      faculty: "Management",
      description: "Develop essential business skills including finance, marketing, and entrepreneurship with real-world case studies.",
      skills: ["Management", "Finance"],
      moreSkillsCount: 3
    },
    {
      programId: "bce-civil",
      level: "Undergraduate",
      title: "Bachelor of Civil Engineering",
      abbreviation: "BCE",
      duration: "4 Years",
      faculty: "Science & Technology",
      description: "Learn structural analysis, construction design, project management, and sustainable construction practices.",
      skills: ["Structural Design", "Project Management"],
      moreSkillsCount: 2
    },
    {
      programId: "bce-computer",
      level: "Undergraduate",
      title: "Bachelor of Computer Engineering",
      abbreviation: "BCE",
      duration: "4 Years",
      faculty: "Science & Technology",
      description: "Advanced computing program combining hardware and software engineering with emerging technologies.",
      skills: ["Hardware", "Software Engineering"],
      moreSkillsCount: 3
    },
    {
      programId: "bit",
      level: "Undergraduate",
      title: "Bachelor of Information Technology",
      abbreviation: "BIT",
      duration: "4 Years",
      faculty: "Science & Technology",
      description: "Focused program covering systems administration, cybersecurity, cloud computing, and IT management.",
      skills: ["Cybersecurity", "Cloud Computing"],
      moreSkillsCount: 2
    },
    {
      programId: "mca",
      level: "Postgraduate",
      title: "Master of Computer Application",
      abbreviation: "MCA",
      duration: "2 Years",
      faculty: "Science & Technology",
      description: "Advanced computing program for BCA graduates and IT professionals seeking specialization and research opportunities.",
      skills: ["Research", "Analytics"],
      moreSkillsCount: 2
    },
    {
      programId: "mamcj",
      level: "Postgraduate",
      title: "Master of Arts in Mass Communication & Journalism",
      abbreviation: "MAMCJ",
      duration: "2 Years",
      faculty: "Humanities",
      description: "Develop expertise in multimedia journalism, communication theory, and digital media production.",
      skills: ["Journalism", "Media Studies"],
      moreSkillsCount: 2
    },
    {
      programId: "pgdca",
      level: "Postgraduate Studies",
      title: "Post Graduate Diploma in Computer Application",
      abbreviation: "PGDCA",
      duration: "1 Year",
      faculty: "Science & Technology",
      description: "Intensive program designed for professionals transitioning to IT with focus on practical development and industry skills.",
      skills: ["Practical Skills", "Industry Ready"],
      moreSkillsCount: 2
    }
  ]

  // Get unique faculties
  const faculties = ["All", ...new Set(programsData.map(program => program.faculty))]

  // Filter programs based on selected faculty
  const filteredPrograms = selectedFaculty === "All" 
    ? programsData 
    : programsData.filter(program => program.faculty === selectedFaculty)

  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Quality university-standard education equipped with industry partnerships and practical learning opportunities
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl">
              Choose from diverse undergraduate, postgraduate, and diploma programs designed to meet your career aspirations.
            </p>
          </div>

          {/* Faculty Filter Buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            {faculties.map((faculty) => (
              <button
                key={faculty}
                onClick={() => setSelectedFaculty(faculty)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  selectedFaculty === faculty
                    ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                {faculty}
              </button>
            ))}
          </div>

          {/* Programs Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredPrograms.length}</span> {filteredPrograms.length === 1 ? 'program' : 'programs'}
              {selectedFaculty !== "All" && (
                <span> in <span className="font-semibold text-blue-600">{selectedFaculty}</span></span>
              )}
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <ProgramCard
                key={index}
                programId={program.programId}
                level={program.level}
                title={program.title}
                abbreviation={program.abbreviation}
                duration={program.duration}
                description={program.description}
                skills={program.skills}
                moreSkillsCount={program.moreSkillsCount}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 text-lg">No programs found in this faculty.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Programs

