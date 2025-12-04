const GalleryCard = ({ image, title, height = "medium" }) => {
  // Define height classes for masonry effect
  const heightClasses = {
    short: "h-48",
    medium: "h-64",
    tall: "h-80"
  }

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer ${heightClasses[height]}`}>
      {/* Image */}
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg">
            {title}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard
