import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)
  const blob4Ref = useRef<HTMLDivElement>(null)
  const blob5Ref = useRef<HTMLDivElement>(null)

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
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current, blob4Ref.current, blob5Ref.current]
    
    blobs.forEach((blob, index) => {
      if (blob) {
        gsap.fromTo(
          blob,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            delay: index * 0.1,
            ease: 'elastic.out(1, 0.5)',
          }
        )

        // Continuous floating animation
        gsap.to(blob, {
          y: '+=30',
          x: '+=20',
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })

        // Rotation animation
        gsap.to(blob, {
          rotation: index % 2 === 0 ? 360 : -360,
          duration: 20 + index * 2,
          repeat: -1,
          ease: 'none',
        })
      }
    })
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-[#FAFBFC] overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Decorative Blobs */}
      <div
        ref={blob1Ref}
        className="absolute top-20 left-32 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-60 blur-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={blob2Ref}
        className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-br from-blue-50 to-blue-150 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-50 blur-sm"
      />
      <div
        ref={blob3Ref}
        className="absolute bottom-32 left-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-blue-200 rounded-[50%_50%_50%_50%/60%_40%_60%_40%] opacity-60 blur-sm"
      />
      <div
        ref={blob4Ref}
        className="absolute bottom-1/4 right-40 w-56 h-56 bg-gradient-to-br from-blue-50 to-blue-100 rounded-[70%_30%_50%_50%/50%_50%_70%_30%] opacity-40 blur-sm"
      />
      <div
        ref={blob5Ref}
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-150 rounded-[40%_60%_60%_40%/70%_30%_70%_30%] opacity-50 blur-sm"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight">
            <span className="inline-block text-black font-light">Creating</span>
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mt-2">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-light">
              the Art System
            </span>
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mt-2">
            <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-light">
              for the future
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 font-light"
          >
            <span className="text-blue-500 font-normal">The Sketchstory</span> is a universal creative platform that interconnects art ecosystems —
            empowering artists and collectors by placing them at the center of their artistic journey.
          </p>
        </div>

        {/* Partners Section */}
        <div className="mt-20">
          <h2 className="text-xl md:text-2xl font-normal text-gray-800 mb-8">
            Ecosystem Partners
          </h2>
          {/* Partner logos can go here */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
