import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const ceoSectionRef = useRef<HTMLDivElement>(null)
  const ceoNameRef = useRef<HTMLHeadingElement>(null)
  const ceoTitleRef = useRef<HTMLParagraphElement>(null)
  const ceoBio1Ref = useRef<HTMLParagraphElement>(null)
  const ceoBio2Ref = useRef<HTMLParagraphElement>(null)
  
  const teamTitleRef = useRef<HTMLHeadingElement>(null)
  const teamDescRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate CEO Section
    const ceoTl = gsap.timeline({
      scrollTrigger: {
        trigger: ceoSectionRef.current,
        start: 'top 80%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
      }
    })

    ceoTl
      .fromTo(ceoNameRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(ceoTitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(ceoBio1Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
      .fromTo(ceoBio2Ref.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )

    // Animate Team Section
    const teamTl = gsap.timeline({
      scrollTrigger: {
        trigger: teamTitleRef.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    })

    teamTl
      .fromTo(teamTitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(teamDescRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )

    // Animate team cards
    const cards = cardsRef.current?.children
    if (cards) {
      gsap.fromTo(
        Array.from(cards),
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const teamCategories = [
    {
      title: 'THE ARTISTS',
      description: 'Explore the faces behind our designs and uncover the creative brilliance driving our success. Collaborative and enthusiastic, we push creative boundaries to deliver exceptional, tailored solutions.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'THE 3D DESIGNERS',
      description: 'Our visionary 3D design team, where boundless creativity reigns supreme. Our skilled individuals are driven by a fervent passion for pushing the boundaries of three-dimensional visualization. Specializing in architectural renderings to product prototypes, we meticulously craft immersive experiences that captivate and inspire.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'THE 2D DESIGNERS',
      description: 'Meet our select 2D design team blending creativity, expertise, and passion. With sharp attention to detail and expertise in visual storytelling, we craft captivating visuals across illustration, graphic design, and digital art.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className="bg-[#E8E8E8]">
      {/* CEO Section - First Screen */}
      <section 
        ref={ceoSectionRef}
        className="min-h-screen flex items-center justify-center px-6 py-20 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={ceoNameRef}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4"
          >
            Raj Shekhar Patnaik
          </h1>
          <p 
            ref={ceoTitleRef}
            className="text-sm md:text-base italic text-gray-700 mb-12"
          >
            Founder and CEO
          </p>
          
          <p 
            ref={ceoBio1Ref}
            className="text-sm md:text-base leading-relaxed text-gray-700 mb-6 font-light"
          >
            Embarking on his artistic journey at a very young age, Raj Shekhar swiftly transitioned into design, building a career spanning over a decade of diverse experiences in artistic media. With a passion for sculptures and large-scale installations. His practise is defined by innovation, seamlessly integrating new technologies and contemporary methods to create forward-thinking, impactful designs.
          </p>
          
          <p 
            ref={ceoBio2Ref}
            className="text-sm md:text-base leading-relaxed text-gray-700 font-light"
          >
            From India to the MENA region, Raj has drawn inspiration from innovation-driven environments that have shaped his pioneering spirit. Through collaborations with government bodies and the execution of projects, at national and institutional levels, these experiences have empowered him to navigate challenges, take calculated risks, and aspire to lead on a global stage—driving a company committed to diversity, inclusivity, creativity, technological advancement, and excellence across cultures and industries.
          </p>
        </div>
      </section>

      {/* Team Section - Second Screen */}
      <section className="min-h-screen py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              ref={teamTitleRef}
              className="text-3xl md:text-4xl font-normal text-gray-900 mb-6 uppercase tracking-wider"
            >
              Meet The Team
            </h2>
            <p 
              ref={teamDescRef}
              className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto font-light"
            >
              We are more than proud to present to you our team. Young and charismatic, but professionals in all matters. They have a wealth of experience in the field of architectural visualisation and product design.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div 
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {teamCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-4 uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
