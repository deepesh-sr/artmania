import { useState } from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFBFC]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-black tracking-tight">
            Sketchostory
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200 border-b-2 border-black pb-1"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
          >
            About us
          </a>
          <a 
            href="#services" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
          >
            Contact
          </a>
          <button className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300">
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
          <a 
            href="#home" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </a>
          <a 
            href="#services" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            className="text-base text-gray-700 hover:text-black transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <button className="px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 text-sm">
            SUPPORT OUR WORK
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav