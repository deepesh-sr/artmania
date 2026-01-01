import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      )
      .fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      )

    // Animate form
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // Animate info section
    gsap.fromTo(infoRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate email sending - Replace with actual email service
    // You can use services like EmailJS, SendGrid, or your own backend API
    try {
      // Placeholder email service - replace with actual implementation
      console.log('Form data to be sent:', {
        to: 'partnerships@sketchostory.com', // Placeholder email
        from: formData.email,
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        message: formData.message
      })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFBFC] py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-gray-900"
          >
            Ready to redefine luxury with Sketchostory?
          </h1>
          <p 
            ref={subtitleRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Share your vision with us, and let's craft a design narrative that resonates with your unique style. Drop us a message or arrange a visit, we are more than happy to meet you. Don't forget to bring all of your ideas with you, we're eager to hear them.
          </p>
        </div>

        {/* Contact Form */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 shadow-sm rounded-lg mb-16"
        >
          {/* Name */}
          <div className="mb-6">
            <label htmlFor="firstName" className="block text-sm font-normal text-gray-900 mb-2">
              Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-200"
            />
          </div>

          {/* Last Name */}
          <div className="mb-6">
            <label htmlFor="lastName" className="block text-sm font-normal text-gray-900 mb-2">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full px-4 py-3 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-normal text-gray-900 mb-2">
              Your email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-200"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-normal text-gray-900 mb-2">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all duration-200 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-3 bg-gray-900 text-white text-sm md:text-base font-light tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 uppercase disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <p className="mt-6 text-center text-green-600 font-light">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-6 text-center text-red-600 font-light">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Office Information */}
        <div ref={infoRef} className="text-center">
          <p className="text-sm font-medium text-gray-900 mb-8 tracking-wide">
            OFFICE HOURS Monday - Friday 8 AM - 7 PM
          </p>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {/* India Office */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="text-2xl">🇮🇳</span>
                <h3 className="text-base font-medium text-gray-900">INDIA</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700 font-light">
                <p>
                  Phone: <a href="tel:+918150471248" className="hover:text-gray-900 transition-colors">+91 8150471248</a>
                </p>
                <p>
                  Email: <a href="mailto:partnerships@sketchostory.com" className="hover:text-gray-900 transition-colors">partnerships@sketchostory.com</a>
                </p>
                <p className="leading-relaxed">
                  Office Address: F72 Vishvappya Nagar, Bommanahalli, Begur, Bangalore Karnataka, India 560060
                </p>
                <p className="leading-relaxed">
                  Warehouse Address: 364 Chhond, Kalinga-vihar, Rourkela, Odisha, India 769015
                </p>
              </div>
            </div>

            {/* UAE Office */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 mb-4">
                <span className="text-2xl">🇦🇪</span>
                <h3 className="text-base font-medium text-gray-900">UAE</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700 font-light">
                <p>
                  Phone: <a href="tel:+971504348145" className="hover:text-gray-900 transition-colors">+971 504348145</a>
                </p>
                <p>
                  Email: <a href="mailto:partnerships@sketchostory.com" className="hover:text-gray-900 transition-colors">partnerships@sketchostory.com</a>
                </p>
                <p className="leading-relaxed">
                  Office Address: 126th Floor, Amber Gem Tower, Ajman
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
