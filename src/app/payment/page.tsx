'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AlertCircle, CheckCircle, CreditCard, Smartphone, Calendar, User, Phone, Mail, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PaymentPage() {
  const [bookingData, setBookingData] = useState<any>(null)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: '',
    upiId: '',
    bankName: ''
  })

  useEffect(() => {
    // Get booking data from localStorage or URL params
    const savedBooking = localStorage.getItem('pendingBooking')
    if (savedBooking) {
      setBookingData(JSON.parse(savedBooking))
    }
  }, [])

  const handlePayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      // Generate payment screenshot (in real implementation, this would be server-side)
      const paymentData = {
        bookingId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        amount: bookingData?.amount,
        paymentMethod,
        status: 'completed',
        timestamp: new Date().toISOString(),
        clientInfo: {
          name: bookingData?.fullName,
          email: bookingData?.email,
          mobileNumber: bookingData?.mobileNumber,
          service: bookingData?.service,
          consultationType: bookingData?.consultationType
        }
      }
      
      // Save payment screenshot to localStorage (in real implementation, save to database)
      localStorage.setItem('paymentScreenshot', JSON.stringify(paymentData))
      
      // Send payment data to admin API
      fetch('/api/admin/payment-screenshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      }).then(response => {
        if (response.ok) {
          // Trigger storage event for admin panel
          window.dispatchEvent(new CustomEvent('paymentScreenshot', { 
            detail: paymentData 
          }))
        }
      }).catch(error => {
        console.error('Failed to save payment screenshot:', error)
      })
      
      setPaymentComplete(true)
      setIsProcessing(false)
      localStorage.removeItem('pendingBooking')
    }, 3000)
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Payment <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Successful!</span>
          </h1>
          
          <p className="text-xl text-amber-100 mb-8">
            Your consultation has been confirmed. We will contact you shortly.
          </p>
          
          <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Booking Details</h3>
              <div className="space-y-2 text-amber-100">
                <div className="flex justify-between">
                  <span>Booking ID:</span>
                  <span className="text-amber-400">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span>{bookingData?.service === 'kundli' ? 'Kundli Reading' : 'One Question Reading'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultation Type:</span>
                  <span className="capitalize">{bookingData?.consultationType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount Paid:</span>
                  <span className="text-green-400 font-bold">{bookingData?.amount}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Return to Home
              </Button>
            </Link>
            
            <Button variant="outline" className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
              Download Receipt
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-6 py-2 text-sm font-semibold">
              Secure Payment
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Complete Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Booking</span>
            </h1>
            
            <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Secure payment processing for your consultation with Pandit Rajkumar Ji
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm sticky top-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-amber-400" />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-amber-100">Service:</span>
                      <span className="text-white font-medium">
                        {bookingData?.service === 'kundli' ? 'Kundli Reading' : 'One Question Reading'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-amber-100">Consultation:</span>
                      <span className="text-white font-medium capitalize">
                        {bookingData?.consultationType}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-amber-100">Duration:</span>
                      <span className="text-white font-medium">
                        {bookingData?.consultationType === 'chat' ? '30 minutes' : 
                         bookingData?.consultationType === 'phone' ? '45 minutes' : '60 minutes'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-amber-100">Client Name:</span>
                      <span className="text-white font-medium">{bookingData?.fullName}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-amber-100">Email:</span>
                      <span className="text-white font-medium text-sm">{bookingData?.email}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-amber-400/30 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-white">Total Amount:</span>
                      <span className="text-2xl font-bold text-amber-400">{bookingData?.amount}</span>
                    </div>
                  </div>
                  
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-400/30">
                    <div className="flex items-center text-amber-100 text-sm">
                      <Shield className="w-4 h-4 mr-2 text-amber-400" />
                      <span>100% Secure Payment Processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">Select Payment Method</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Payment Method Selection */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === 'card' 
                          ? 'border-amber-400 bg-amber-900/30' 
                          : 'border-amber-400/30 hover:border-amber-400/60 bg-amber-900/10'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="text-center">
                        <CreditCard className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                        <div className="text-white font-medium">Credit/Debit Card</div>
                      </div>
                    </div>
                    
                    <div
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === 'upi' 
                          ? 'border-amber-400 bg-amber-900/30' 
                          : 'border-amber-400/30 hover:border-amber-400/60 bg-amber-900/10'
                      }`}
                      onClick={() => setPaymentMethod('upi')}
                    >
                      <div className="text-center">
                        <Smartphone className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                        <div className="text-white font-medium">UPI Payment</div>
                      </div>
                    </div>
                    
                    <div
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === 'netbanking' 
                          ? 'border-amber-400 bg-amber-900/30' 
                          : 'border-amber-400/30 hover:border-amber-400/60 bg-amber-900/10'
                      }`}
                      onClick={() => setPaymentMethod('netbanking')}
                    >
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-amber-400">🏦</div>
                        <div className="text-white font-medium">Net Banking</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Payment Form */}
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber" className="text-amber-100">Card Number</Label>
                          <Input
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: e.target.value }))}
                            className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="holderName" className="text-amber-100">Cardholder Name</Label>
                          <Input
                            id="holderName"
                            value={formData.holderName}
                            onChange={(e) => setFormData(prev => ({ ...prev, holderName: e.target.value }))}
                            className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate" className="text-amber-100">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                            className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-amber-100">CVV</Label>
                          <Input
                            id="cvv"
                            value={formData.cvv}
                            onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value }))}
                            className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                            placeholder="123"
                            maxLength={3}
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* UPI Payment Form */}
                  {paymentMethod === 'upi' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId" className="text-amber-100">UPI ID</Label>
                        <Input
                          id="upiId"
                          value={formData.upiId}
                          onChange={(e) => setFormData(prev => ({ ...prev, upiId: e.target.value }))}
                          className="bg-amber-900/20 border-amber-400/30 text-white placeholder-amber-300/50 focus:border-amber-400"
                          placeholder="yourname@upi"
                        />
                      </div>
                      
                      <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-400/30">
                        <p className="text-amber-100 text-sm">
                          <strong>Scan QR Code:</strong> You will be redirected to UPI app to complete payment
                        </p>
                        <p className="text-amber-100 text-sm mt-2">
                          <strong>Direct UPI:</strong> rajkumar196712-3@okaxis
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Net Banking Form */}
                  {paymentMethod === 'netbanking' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bankName" className="text-amber-100">Select Bank</Label>
                        <Select value={formData.bankName} onValueChange={(value) => setFormData(prev => ({ ...prev, bankName: value }))}>
                          <SelectTrigger className="bg-amber-900/20 border-amber-400/30 text-white focus:border-amber-400">
                            <SelectValue placeholder="Select your bank" />
                          </SelectTrigger>
                          <SelectContent className="bg-amber-900/90 border-amber-400/30">
                            <SelectItem value="sbi">State Bank of India</SelectItem>
                            <SelectItem value="hdfc">HDFC Bank</SelectItem>
                            <SelectItem value="icici">ICICI Bank</SelectItem>
                            <SelectItem value="axis">Axis Bank</SelectItem>
                            <SelectItem value="pnb">Punjab National Bank</SelectItem>
                            <SelectItem value="bob">Bank of Baroda</SelectItem>
                            <SelectItem value="other">Other Bank</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Important Information */}
                  <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-400/30">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                      <div className="text-amber-100 text-sm">
                        <p className="font-semibold mb-2">Important Information:</p>
                        <ul className="space-y-1">
                          <li>• Payment confirmation will be sent to your registered email</li>
                          <li>• Consultation details will be shared within 24 hours</li>
                          <li>• For any payment issues, contact: +91 9799568414</li>
                          <li>• All payments are secure and encrypted</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Payment Button */}
                  <Button
                    onClick={handlePayment}
                    disabled={!paymentMethod || isProcessing}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        Pay {bookingData?.amount}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}