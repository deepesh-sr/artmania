import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Nav from './components/Nav'

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const Model = lazy(() => import('./components/Model'))

function App() {
  return (
    <>
      {/* Persistent Navigation */}
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/d' element={<Model />} />
        <Route path='*' element={
          <div className="h-screen w-full flex items-center justify-center bg-[#FAFBFC]">
            <div className="text-center pt-20">
              <h1 className="text-2xl text-gray-900 mb-4">404 - Page Not Found</h1>
              <a href="/" className="text-blue-500 hover:text-blue-600 transition-colors">
                Go back to home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </>
  )
}

export default App
