const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* College Name */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Narayani College</h2>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    </div>
  )
}

export default Loading
