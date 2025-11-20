'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Phone, MessageCircle, Video, Calendar, CheckCircle, Award, Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Narayan Joshi",
      location: "Bikaner",
      text: "Pandit Rajkumar Ji's predictions were incredibly accurate. His remedies helped me overcome major obstacles in my career.",
      rating: 5,
      image: "🙎‍♂️"
    },
    {
      name: "Karan Sharma",
      location: "Nokha", 
      text: "The kundli analysis was detailed and insightful. Pandit Ji provided practical solutions that really worked.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Anjali Pancharia",
      location: "Delhi",
      text: "His guidance during my difficult phase was life-changing. The remedies suggested were simple yet powerful.",
      rating: 5,
      image: "👩‍💼"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-6 py-2 text-sm font-semibold">
            <Sparkles className="w-4 h-4 mr-2" />
            World-Renowned Vedic Expert
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precious Vedic Astrologer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
              Pandit Rajkumar Ji
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Accurate Predictions • Trusted Remedies • Vedic Expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/booking">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                <MessageCircle className="w-5 h-5 mr-2" />
                Ask Your Question
              </Button>
            </Link>
          </div>

          <div className="flex justify-center gap-8 text-amber-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">25 +</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">10K +</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">99%</div>
              <div className="text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Pandit Rajkumar Ji</span>
            </h2>
            <p className="text-xl text-amber-100">Experience the power of authentic Vedic astrology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">25 + Years Experience</h3>
                <p className="text-amber-100">Decades of dedicated practice in Vedic astrology with thousands of satisfied clients worldwide.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Accurate Predictions</h3>
                <p className="text-amber-100">Precise horoscope analysis and future predictions based on ancient Vedic principles.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Trusted Remedies</h3>
                <p className="text-amber-100">Effective and simple Vedic remedies to overcome obstacles and bring positive energy.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quick Consultation</h3>
                <p className="text-amber-100">Instant access to guidance through chat, phone, or video consultations at your convenience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Clients Say</span>
            </h2>
            <p className="text-xl text-amber-100">Real experiences from people who transformed their lives</p>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonials[currentTestimonial].image}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-amber-200">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg text-amber-100 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </CardContent>
            </Card>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentTestimonial === index ? 'bg-amber-400 w-8' : 'bg-amber-400/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vedic Background Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="text-8xl mb-6">🪬</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ancient Wisdom for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Modern Life</span>
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Harness the power of Vedic astrology combined with ancient wisdom to navigate life's challenges. 
              Our time-honored practices provide clarity, direction, and spiritual growth in today's fast-paced world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Cosmic Alignment</h3>
              <p className="text-amber-100">Understand your unique cosmic blueprint</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">☀️</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Planetary Wisdom</h3>
              <p className="text-amber-100">Navigate life using planetary guidance</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🕉️</div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Spiritual Growth</h3>
              <p className="text-amber-100">Transform your life spiritually</p>
            </div>
          </div>

          <Link href="/booking">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
              Begin Your Spiritual Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}