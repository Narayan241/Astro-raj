'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, Calendar, Users, Star, BookOpen, Heart, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Jyotish Visharad",
      description: "Recognized master degree in Vedic Astrology"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Gold Medalist",
      description: "Excellence in astrological predictions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "10,000+ Clients",
      description: "Worldwide clientele spanning 25+ countries"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Published Author",
      description: "5 books on Vedic astrology and remedies"
    }
  ]

  const timeline = [
    {
      year: "1999",
      title: "Journey Began",
      description: "Started learning Vedic astrology from renowned gurus"
    },
    {
      year: "2005",
      title: "Professional Practice",
      description: "Began full-time astrological consulting"
    },
    {
      year: "2010",
      title: "International Recognition",
      description: "Clients from across the globe seeking guidance"
    },
    {
      year: "2015",
      title: "Published Works",
      description: "Authored first book on practical astrology"
    },
    {
      year: "2020",
      title: "Digital Presence",
      description: "Expanded services to online consultations"
    },
    {
      year: "2024",
      title: "25 Years of Excellence",
      description: "Quarter century of dedicated service to humanity"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-6 py-2 text-sm font-semibold">
              About Pandit Rajkumar Ji
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Vedic Wisdom</span>
            </h1>
            
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              With over 25 years of dedicated practice, Pandit Rajkumar Ji has been a beacon of hope 
              and guidance for thousands seeking clarity through ancient Vedic wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-3xl opacity-30"></div>
<div className="relative w-full h-full bg-gradient-to-b from-amber-700 to-amber-900 rounded-full flex items-center justify-center overflow-hidden">
  <Image
    src="/rajkumarji.jpeg"
    alt="Pandit Rajkumar Ji"
    width={260}
    height={260}
    className="object-cover rounded-full"
    priority
  />
</div>

                <div className="absolute -inset-4 border-2 border-amber-400/30 rounded-full animate-spin-slow"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Meet <span className="text-amber-400">Pandit Rajkumar Ji</span>
              </h2>
              
              <p className="text-lg text-amber-100 leading-relaxed">
                Born into a family of renowned astrologers, Pandit Rajkumar Ji inherited the ancient knowledge 
                of Vedic astrology from his ancestors. His journey began at the tender age of 12, learning the 
                sacred texts and mastering the complex calculations of planetary movements.
              </p>
              
              <p className="text-lg text-amber-100 leading-relaxed">
                Today, he stands as one of the most trusted Vedic astrologers, known for his accurate predictions, 
                practical remedies, and compassionate approach to helping people navigate life's challenges.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-amber-900/20 rounded-lg border border-amber-400/30">
                  <div className="text-2xl font-bold text-amber-400">25+</div>
                  <div className="text-sm text-amber-100">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-amber-900/20 rounded-lg border border-amber-400/30">
                  <div className="text-2xl font-bold text-amber-400">10K+</div>
                  <div className="text-sm text-amber-100">Lives Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Recognition</span>
            </h2>
            <p className="text-xl text-amber-100">A journey of excellence and dedication</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-amber-100 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Excellence</span>
            </h2>
            <p className="text-xl text-amber-100">25 years of dedicated service to humanity</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-yellow-400"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-amber-500 text-white">{item.year}</Badge>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-amber-100">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-400 rounded-full border-4 border-slate-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Us Unique</span>
            </h2>
            <p className="text-xl text-amber-100">The difference that transforms lives</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ancient Knowledge</h3>
                <p className="text-amber-100 leading-relaxed">
                  We combine ancient Vedic wisdom with modern understanding to provide solutions that work in today's world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Compassionate Approach</h3>
                <p className="text-amber-100 leading-relaxed">
                  Every consultation is handled with empathy and understanding, ensuring you feel heard and supported.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-amber-100 leading-relaxed">
                  Our track record of accurate predictions and effective remedies speaks for itself through thousands of satisfied clients.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quote Box */}
          <Card className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border-2 border-amber-400/60 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-6">🕉️</div>
              <blockquote className="text-2xl text-white italic leading-relaxed mb-6">
                "Astrology is not about fortune-telling; it's about understanding the cosmic plan and aligning ourselves with divine wisdom. 
                My mission is to help people find their true path and live in harmony with the universe."
              </blockquote>
              <cite className="text-xl text-amber-400 font-semibold">— Pandit Rajkumar Ji</cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Your Life?</span>
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Take the first step towards clarity, guidance, and spiritual growth
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}