import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface VideoItem {
  id: string
  title: string
  description: string
  youtubeId: string
}

const Portfolio = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  // Sample YouTube video IDs - Replace these with actual project videos
  const videos: VideoItem[] = [
    {
      id: '1',
      title: 'Luxury Interior Design',
      description: 'Modern luxury residential design with bespoke art installations',
      youtubeId: 'vqxMt355jiA' // Replace with actual video ID
    },
    {
      id: '2',
      title: 'Public Art Installation',
      description: 'Large-scale sculpture installation in urban landscape',
      youtubeId: 'rGnO0cPHRMY' // Replace with actual video ID
    },
    {
      id: '3',
      title: 'Fountain Design Project',
      description: 'Majestic water feature with intricate bronze sculptures',
      youtubeId: 'JBTZEOkhN-Q' // Replace with actual video ID
    },
    {
      id: '4',
      title: 'Commercial Space Art',
      description: 'Contemporary art pieces for corporate headquarters',
      youtubeId: 'gRB644T8yV4' // Replace with actual video ID
    },
  ]

  useEffect(() => {
    // Animate header
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    })

    headerTl
      .fromTo(titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )

    // Animate video cards
    const cards = gridRef.current?.children
    if (cards) {
      gsap.fromTo(
        Array.from(cards),
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotateX: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFBFC] py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-gray-900"
          >
            Portfolio
          </h1>
          <p 
            ref={descriptionRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-light"
          >
            Explore our collection of stunning projects that showcase our commitment to excellence, 
            creativity, and innovation in art and design.
          </p>
        </div>

        {/* Video Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`group relative overflow-hidden transition-all duration-500 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-200">
                {/* YouTube Embed */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Info Card */}
              <div className={`mt-6 transition-all duration-500`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium mb-2 text-gray-900">
                      {video.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-light">
                      {video.description}
                    </p>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center font-medium text-white text-base group-hover:bg-gray-800 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Animated Line */}
                <div className="mt-4 h-0.5 bg-gray-900 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-base text-gray-700 mb-6 font-light">
            Want to see more of our work?
          </p>
          <button className="px-10 py-3 bg-gray-900 text-white text-sm md:text-base font-light tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 uppercase">
            View Full Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
