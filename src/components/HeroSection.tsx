import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLButtonElement>(null)
  const descriptionRef = useRef<HTMLHeadingElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    // Animate title words
    tl.fromTo(
      titleRef.current?.children || [],
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    )

    // Animate subtitle
    tl.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
      '-=0.4'
    )

    // Animate description
    tl.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.6'
    )

    // Animate blobs with floating effect
    const blobs = [blob1Ref.current, blob2Ref.current]
    
    blobs.forEach((blob, index) => {
      if (blob) {
        gsap.fromTo(
          blob,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 0.8,
            scale: 1,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'power2.out',
          }
        )

        // Gentle floating animation
        gsap.to(blob, {
          y: '+=15',
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Background Images - Art Room Aesthetic */}
      <div
        ref={blob1Ref}
        className="absolute top-0 left-0 w-72 h-96 opacity-80"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute top-0 right-0 w-72 h-96 opacity-80"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* White overlay to blend images */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <div ref={titleRef} className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
            <span className="inline-block text-gray-900 font-normal uppercase">When Design</span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-2 tracking-wide">
            <span className="inline-block text-gray-900 font-normal uppercase">Brings Beauty Into</span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-2 tracking-wide">
            <span className="inline-block text-gray-900 font-normal uppercase">Your Space</span>
          </h1>
        </div>

        {/* CTA Button */}
        <div className="mb-20">
          <button
            ref={subtitleRef}
            className="px-10 py-3 bg-gray-800 text-white text-sm md:text-base font-light tracking-wider hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 uppercase"
          >
            Contact Us
          </button>
        </div>

        {/* About Section */}
        <div className="mt-32 pt-16 border-t border-gray-200">
          <h2 
            ref={descriptionRef}
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-8"
          >
            Design is what we do best
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10 font-light">
            At Sketchostory, we are storytellers of spaces, weaving tales of natural beauty through our innovative landscaping creations. Our journey began with a passion for transforming ordinary landscapes into immersive experiences. We've spent years perfecting our craft, always seeking to transcend the boundaries of traditional landscaping..
          </p>
          <button className="px-10 py-3 bg-gray-800 text-white text-sm md:text-base font-light tracking-wider hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 uppercase">
            Begin Your Design Story
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
