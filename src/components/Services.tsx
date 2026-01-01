import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ServiceCard {
  title: string
  description: string
  image: string
}

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const processTitleRef = useRef<HTMLHeadingElement>(null)
  const processDescRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  const services: ServiceCard[] = [
    {
      title: 'Interior Art',
      description: 'Infusing homes and office spaces with bespoke, artistic installations that exude luxury and sophistication.',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Public Art',
      description: 'Enriching urban landscapes with opulent art installations that inspire awe.',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Fountains & Pool Statues',
      description: 'Elevating outdoor spaces with majestic fountain designs that evoke tranquility and grace.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  useEffect(() => {
    // Animate section header
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    })

    headerTl
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )

    // Animate service cards
    const cards = cardsRef.current?.children
    if (cards) {
      gsap.fromTo(
        Array.from(cards),
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
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

    // Animate design process section
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    })

    processTl
      .fromTo(
        processTitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(
        processDescRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
        '-=0.3'
      )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="bg-[#FAFBFC]">
      {/* Services Section */}
      <section ref={sectionRef} className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6"
            >
              Our services
            </h2>
            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We work closely with our clients to understand their individual needs and design their spaces to suit their individual wishes. Our services include creating a unique and memorable mood board for your house or space, designing a custom design proposal, and rendering the design proposal to capture its essence.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-72 md:h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section ref={processRef} className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            ref={processTitleRef}
            className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-8"
          >
            The design process
          </h2>
          <p
            ref={processDescRef}
            className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto font-light"
          >
            Contact us to set up a meeting to discuss the details of your project, so that we can help you to uncover what your dream home looks like. As a first step, we'll thoroughly research the best style to suit your space, budget, and unique needs. Next, we'll develop a mood board that will help you to better visualize our ideas. Once we receive your approval on our vision, we'll move onto creating a series of design proposals. In the final step, your favorite proposal will then be flawlessly rendered in our programs to give you a virtual, but very realistic image of your newly-designed spaces.
          </p>
          <button
            ref={ctaRef}
            className="px-8 py-3 bg-gray-900 text-white text-sm md:text-base font-light tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  )
}

export default Services
