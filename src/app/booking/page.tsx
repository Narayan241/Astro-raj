'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, MapPin, User, Phone, MessageCircle, Video, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    service: '',
    consultationType: '',
    whatsappNumber: '',
    question: ''
  })
  
  const [selectedService, setSelectedService] = useState('')
  const [selectedConsultation, setSelectedConsultation] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const services = [
    { id: 'kundli', name: 'Kundli Reading', price: '₹2100', duration: '90 minutes' },
    { id: 'question', name: 'One Question Reading', price: 'Starting ₹500', duration: '30-60 minutes' }
  ]

  const consultationTypes = [
    { id: 'chat', name: 'Chat Consultation', price: '₹500', duration: '30 minutes', icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'phone', name: 'Phone Call', price: '₹1100', duration: '45 minutes', icon: <Phone className="w-5 h-5" /> },
    { id: 'video', name: 'Video Call', price: '₹1600', duration: '60 minutes', icon: <Video className="w-5 h-5" /> }
  ]

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const service = urlParams.get('service')
    if (service) {
      setSelectedService(service)
      setFormData(prev => ({ ...prev, service }))
    }
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required'
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    }

    if (!formData.timeOfBirth) {
      newErrors.timeOfBirth = 'Time of birth is required'
    }

    if (!formData.placeOfBirth.trim()) {
      newErrors.placeOfBirth = 'Place of birth is required'
    }

    if (!selectedService) {
      newErrors.service = 'Please select a service'
    }

    if (!selectedConsultation) {
      newErrors.consultationType = 'Please select consultation type'
    }

    if (selectedService === 'question' && !formData.question.trim()) {
      newErrors.question = 'Please describe your question'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Debug: Log formData before sending
    console.log('Submitting formData:', formData)
    console.log('Email value:', formData.email)
    console.log('Email type:', typeof formData.email)

    // Additional validation
    if (!formData.email || formData.email.trim() === '') {
      alert('Email is required. Please fill in your email address.')
      setIsSubmitting(false)
      return
    }

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      phone: formData.phone,
      dateOfBirth: formData.dateOfBirth,
      timeOfBirth: formData.timeOfBirth,
      placeOfBirth: formData.placeOfBirth,
      service: selectedService,
      consultationType: selectedConsultation,
      question: formData.question,
      whatsappNumber: formData.whatsappNumber
    }

    console.log('Sending payload:', payload)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        const booking = await response.json()
        // Save booking data to localStorage for payment page
        localStorage.setItem('pendingBooking', JSON.stringify({
          ...booking.booking,
          fullName: formData.fullName,
          email: formData.email,
          service: selectedService,
          consultationType: selectedConsultation,
          amount: selectedService === 'kundli' ? '₹2100' : selectedConsultationData?.price || '₹0'
        }))
        
        // Redirect to payment page
        window.location.href = '/payment'
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const selectedServiceData = services.find(s => s.id === selectedService)
  const selectedConsultationData = consultationTypes.find(c => c.id === selectedConsultation)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/20 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-6 py-2 text-sm font-semibold">
            Book Your Consultation
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Spiritual Journey</span>
          </h1>
          
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards clarity and guidance. Book your consultation with Pandit Rajkumar Ji.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-white">
                Consultation Booking Form
              </CardTitle>
              <p className="text-amber-100">
                Please fill in your details accurately for precise predictions
              </p>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-amber-400" />
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-amber-100">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-amber-100">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber" className="text-amber-100">Mobile Number *</Label>
                      <Input
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                        placeholder="+91 9799568414"
                        required
                      />
                      {errors.mobileNumber && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.mobileNumber}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsappNumber" className="text-amber-100">WhatsApp Number (Optional)</Label>
                      <Input
                        id="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                        placeholder="+91 9799568414"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-amber-100">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                        placeholder="+91 9799568414"
                      />
                    </div>
                  </div>
                </div>

                {/* Birth Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-amber-400" />
                    Birth Details
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-amber-100">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white focus:border-amber-400"
                      />
                      {errors.dateOfBirth && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.dateOfBirth}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeOfBirth" className="text-amber-100">Time of Birth *</Label>
                      <Input
                        id="timeOfBirth"
                        type="time"
                        value={formData.timeOfBirth}
                        onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white focus:border-amber-400"
                      />
                      {errors.timeOfBirth && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.timeOfBirth}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="placeOfBirth" className="text-amber-100">Place of Birth *</Label>
                      <Input
                        id="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                        placeholder="City, Country"
                      />
                      {errors.placeOfBirth && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.placeOfBirth}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Select Service *</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedService === service.id
                            ? 'border-amber-400 bg-amber-900/30'
                            : 'border-amber-400/30 hover:border-amber-400/60 bg-amber-900/10'
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">{service.name}</div>
                          {selectedService === service.id && (
                            <CheckCircle className="w-5 h-5 text-amber-400" />
                          )}
                        </div>
                        <div className="text-amber-200 text-sm">{service.duration}</div>
                        <div className="text-amber-400 font-semibold">{service.price}</div>
                      </div>
                    ))}
                  </div>
                  
                  {errors.service && (
                    <p className="text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Consultation Type */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Consultation Type *</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {consultationTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedConsultation === type.id
                            ? 'border-amber-400 bg-amber-900/30'
                            : 'border-amber-400/30 hover:border-amber-400/60 bg-amber-900/10'
                        }`}
                        onClick={() => setSelectedConsultation(type.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-2 text-white">
                              {type.icon}
                            </div>
                            <div className="text-white font-semibold">{type.name}</div>
                          </div>
                          {selectedConsultation === type.id && (
                            <CheckCircle className="w-5 h-5 text-amber-400" />
                          )}
                        </div>
                        <div className="text-amber-200 text-sm">{type.duration}</div>
                        <div className="text-amber-400 font-semibold">{type.price}</div>
                      </div>
                    ))}
                  </div>
                  
                  {errors.consultationType && (
                    <p className="text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.consultationType}
                    </p>
                  )}
                </div>

                {/* Question Details */}
                {selectedService === 'question' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Your Question</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="question" className="text-amber-100">Describe your question in detail *</Label>
                      <Textarea
                        id="question"
                        value={formData.question}
                        onChange={(e) => handleInputChange('question', e.target.value)}
                        className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400 min-h-[120px]"
                        placeholder="Please provide as much detail as possible about your question or concern..."
                      />
                      {errors.question && (
                        <p className="text-red-400 text-sm flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.question}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Order Summary */}
                {(selectedService || selectedConsultation) && (
                  <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-400/30">
                    <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
                    
                    <div className="space-y-2 text-amber-100">
                      {selectedServiceData && (
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="text-amber-400 font-semibold">{selectedServiceData.name}</span>
                        </div>
                      )}
                      
                      {selectedConsultationData && (
                        <div className="flex justify-between">
                          <span>Consultation:</span>
                          <span className="text-amber-400 font-semibold">{selectedConsultationData.name}</span>
                        </div>
                      )}
                      
                      <div className="border-t border-amber-400/30 pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold text-white">
                          <span>Total Amount:</span>
                          <span className="text-amber-400">
                            {selectedService === 'kundli' ? '₹2100' : selectedConsultationData?.price || '₹0'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                  </Button>
                  
                  <p className="text-amber-200 text-sm mt-4">
                    By submitting this form, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}