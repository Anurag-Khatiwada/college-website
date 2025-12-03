import { Link } from 'react-router-dom'

const ProgramCard = ({ 
  level = "Undergraduate",
  title,
  abbreviation,
  duration,
  description,
  skills = [],
  moreSkillsCount = 0,
  image,
  programId = "bca"
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )}
        
        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg">
            {level}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>

        {/* Abbreviation and Duration */}
        <div className="flex items-center text-sm text-gray-600 mb-4 space-x-2">
          <span className="font-semibold">{abbreviation}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Skills Tags */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
            {moreSkillsCount > 0 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                +{moreSkillsCount} more
              </span>
            )}
          </div>
        )}

        {/* Learn More Link */}
        <Link 
          to={`/program/${programId}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
        >
          Learn More
          <svg 
            className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProgramCard
