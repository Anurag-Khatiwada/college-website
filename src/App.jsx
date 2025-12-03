import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Loading from './Components/Loading'
import About from './Pages/About'
import Programs from './Pages/Programs'
import Program from './Pages/Program'
import Notice from './Pages/Notice'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/program/:id" element={<Program />} />
          <Route path="/notice" element={<Notice />} />
        </Routes>
      )}
    </>
  )
}

export default App
