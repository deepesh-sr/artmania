import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-3xl border-white/20 ">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h2 className="text-2xl md:text-3xl text-black tracking-tight hover:opacity-80 transition-opacity font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Sketchostory
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-regular"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-regular"
          >
            About us
          </Link>
          <Link 
            to="/services" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-regular"
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-regular"
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-regular"
          >
            Contact
          </Link>
          <button className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 font-light text-sm">
            SUPPORT OUR WORK
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FAFBFC] shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          <Link 
            to="/" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </Link>
          <Link 
            to="/services" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 font-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <button className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm font-light">
            SUPPORT OUR WORK
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav