import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import GithubProvider from './context/github/GithubProvider'
function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />

          <div className='container mx-auto pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
