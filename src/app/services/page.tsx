'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Phone, Video, Star, CheckCircle, Clock, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const consultationModes = [
    {
      id: 'chat',
      title: 'Chat Consultation',
      price: '₹500',
      duration: '30 minutes',
      icon: <MessageCircle className="w-6 h-6" />,
      features: ['Text-based consultation', 'Detailed written response', 'Follow-up messages included'],
      popular: false
    },
    {
      id: 'phone',
      title: 'Phone Call',
      price: '₹1100',
      duration: '45 minutes',
      icon: <Phone className="w-6 h-6" />,
      features: ['Direct voice conversation', 'Real-time discussion', 'Personal connection'],
      popular: true
    },
    {
      id: 'video',
      title: 'Video Call',
      price: '₹1600',
      duration: '60 minutes',
      icon: <Video className="w-6 h-6" />,
      features: ['Face-to-face consultation', 'Visual analysis', 'Most comprehensive'],
      popular: false
    }
  ]

  const comparisonData = [
    { feature: 'Response Time', chat: 'Within 2 hours', phone: 'Instant', video: 'Instant' },
    { feature: 'Accuracy Level', chat: '95%', phone: '98%', video: '99%' },
    { feature: 'Expert Advice', chat: 'Detailed', phone: 'Interactive', video: 'Comprehensive' },
    { feature: 'Remedies Included', chat: 'Yes', phone: 'Yes', video: 'Yes' },
    { feature: 'Follow-up Support', chat: '7 days', phone: '7 days', video: '14 days' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-6 py-2 text-sm font-semibold">
            Our Premium Services
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Authentic Vedic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Astrology Services</span>
          </h1>
          
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Experience the power of ancient Vedic wisdom with our premium consultation services. 
            Get accurate predictions, effective remedies, and spiritual guidance.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Kundli Reading Service */}
            <Card className="group relative bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm hover:border-amber-400/80 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <Badge className="bg-amber-500 text-white">Most Popular</Badge>
                </div>
                
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  Kundli Reading
                </CardTitle>
                
                <p className="text-amber-100 text-lg">
                  Complete analysis of your birth chart for comprehensive life guidance
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Detailed Kundli Analysis</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Dosha Check (Mangal, Kaal Sarp, Pitra)</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Personalized Remedies Included</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Career, Marriage & Health Predictions</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-amber-400 mb-2">₹2100</div>
                  <div className="text-amber-200">Complete Life Analysis</div>
                </div>
                
                <Link href="/booking?service=kundli">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    Book Kundli Reading
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* One Question Reading Service */}
            <Card className="group relative bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm hover:border-amber-400/80 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Quick Answer</Badge>
                </div>
                
                <CardTitle className="text-3xl font-bold text-white mb-2">
                  One Question Reading
                </CardTitle>
                
                <p className="text-amber-100 text-lg">
                  Get instant answers to your specific questions with precise guidance
                </p>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-amber-100">
                    <Zap className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Quick Response to Your Question</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Focus on One Specific Issue</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Immediate Remedies Suggested</span>
                  </div>
                  <div className="flex items-center text-amber-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-amber-400" />
                    <span>Multiple Consultation Modes</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-amber-200 mb-4">Choose Your Consultation Mode:</div>
                  
                  <div className="space-y-3">
                    {consultationModes.map((mode) => (
                      <div
                        key={mode.id}
                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedService === mode.id
                            ? 'border-amber-400 bg-amber-900/30'
                            : 'border-amber-400/30 hover:border-amber-400/60 bg-amber-900/10'
                        }`}
                        onClick={() => setSelectedService(mode.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-3 text-white">
                              {mode.icon}
                            </div>
                            <div>
                              <div className="text-white font-semibold">{mode.title}</div>
                              <div className="text-amber-200 text-sm">{mode.duration}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-amber-400">{mode.price}</div>
                            {mode.popular && (
                              <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link href="/booking?service=question">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    Ask Your Question
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Compare <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Consultation Modes</span>
            </h2>
            <p className="text-xl text-amber-100">Choose the perfect consultation method for your needs</p>
          </div>

          <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-amber-400/30">
                      <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
                      <th className="text-center py-4 px-4 text-amber-400 font-semibold">
                        <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                        Chat
                      </th>
                      <th className="text-center py-4 px-4 text-amber-400 font-semibold">
                        <Phone className="w-5 h-5 mx-auto mb-1" />
                        Phone
                      </th>
                      <th className="text-center py-4 px-4 text-amber-400 font-semibold">
                        <Video className="w-5 h-5 mx-auto mb-1" />
                        Video
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="border-b border-amber-400/20">
                        <td className="py-4 px-4 text-amber-100 font-medium">{row.feature}</td>
                        <td className="py-4 px-4 text-center text-amber-200">{row.chat}</td>
                        <td className="py-4 px-4 text-center text-amber-200">{row.phone}</td>
                        <td className="py-4 px-4 text-center text-amber-200">{row.video}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Our Services</span>
            </h2>
            <p className="text-xl text-amber-100">Experience the difference with authentic Vedic guidance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Guidance</h3>
                <p className="text-amber-100">
                  25+ years of experience in Vedic astrology with thousands of satisfied clients worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-amber-100">
                  Get timely guidance when you need it most with flexible consultation options
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Accuracy</h3>
                <p className="text-amber-100">
                  99% accuracy rate with practical remedies that deliver real results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Clarity?</span>
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Book your consultation today and take the first step towards a better tomorrow
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50">
              Schedule Your Consultation Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}