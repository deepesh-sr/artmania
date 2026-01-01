import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLButtonElement>(null)
  const descriptionRef = useRef<HTMLHeadingElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const bgImageRef = useRef<HTMLDivElement>(null)

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

    // Animate background image - horizontal infinite loop with faster speed
    if (bgImageRef.current) {
      gsap.to(bgImageRef.current, {
        x: '-50%',
        duration: 12,
        repeat: -1,
        ease: 'none',
      })
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden flex items-center justify-center px-6 py-20">
       <div 
            ref={bgImageRef}
            className="absolute left-0 right-0 top-0 bottom-0 w-[200%] h-screen "
            style={{
              backgroundImage: 'url(https://finternetlab.io/wp-content/uploads/2025/09/Hero-BG-scaled.jpg)',
              backgroundSize: '100% 100%',
              backgroundPosition: 'left center',
              backgroundRepeat: 'repeat-x',
              opacity: 1,
              zIndex: 0,
            }}
          />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Single Screen - Title and About Combined */}
        <div className='relative h-screen flex flex-col justify-center items-center overflow-hidden px-6 py-12'>
          
          {/* Overlay to soften the background */}
          <div className="absolute inset-0 bg-white/2" style={{ zIndex: 1 }} />

          {/* Hero Title Section - Top Half */}
          <div className="flex-1 flex flex-col justify-end items-center relative z-10 ">
            <div ref={titleRef} className="mb-1 flex flex-col items-center">
              <h1
                className="text-4xl md:text-5xl lg:text-7xl leading-tight  font-light"
                style={{ fontFamily: 'ivypresto-display, sans-serif' }}
              >
                <span className="inline-block text-gray-900">When Design</span>
              </h1>
              <h1
                className="text-4xl md:text-5xl lg:text-7xl leading-tight  font-light"
                style={{ fontFamily: 'ivypresto-display, sans-serif' }}
              >
                <span className="inline-block text-gray-900" >Brings Beauty Into</span>
              </h1>
              <h1
                className="text-4xl md:text-5xl lg:text-7xl leading-tight  font-light"
                style={{ fontFamily: 'ivypresto-display, sans-serif' }}
              >
                <span className="inline-block text-gray-900" style={{color : 'rgb(118, 165, 244)'}}>Your Space</span>
              </h1>
            </div>
          </div>

          {/* About Section - Bottom Half */}
          <div className="flex-1 flex flex-col justify-start items-center max-w-4xl relative z-10 pt-6">
           
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-10 font-light px-4 max-w-2xl text-center tracking-wide">
              At Sketchostory, we are storytellers of spaces, weaving tales of natural beauty through our innovative landscaping creations. Our journey began with a passion for transforming ordinary landscapes into immersive experiences.
            </p>
            <button 
              ref={subtitleRef}
              className="px-10 py-3 rounded-full bg-gray-900 text-white text-xs md:text-sm font-medium tracking-[0.2em] transition-all duration-100 uppercase border border-gray-900 hover:text-gray-900 hover:bg-transparent"
            >
              Begin Your Design Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
