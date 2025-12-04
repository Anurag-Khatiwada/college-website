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
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import NewsEvents from './Pages/NewsEvents'
import NewsDetail from './Pages/NewsDetail'

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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news-events/:slug" element={<NewsDetail />} />
        </Routes>
      )}
    </>
  )
}

export default App
