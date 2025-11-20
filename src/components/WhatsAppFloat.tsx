'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = '919799568414'
    const message = encodeURIComponent('Hello! I would like to book a consultation with Pandit Rajkumar Ji.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 group"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            
            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>
          
          {/* Hover Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
              Chat with us on WhatsApp
              <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-800 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-amber-900 to-yellow-900 rounded-2xl p-6 max-w-md w-full border border-amber-400/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Quick Contact</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-amber-200 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-amber-800/50 rounded-lg p-4 border border-amber-400/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">WhatsApp</div>
                    <div className="text-amber-200 text-sm">+91 9799568414</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-800/50 rounded-lg p-4 border border-amber-400/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-amber-200 text-sm">+91 9799568414</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-800/50 rounded-lg p-4 border border-amber-400/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✉</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-amber-200 text-sm">rajkumar196712@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}