import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-950 to-slate-900 border-t border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🪬</span>
              </div>
              <span className="text-xl font-bold text-white">Pandit Rajkumar Ji</span>
            </div>
            <p className="text-amber-100 leading-relaxed">
              World-renowned Vedic astrologer with 25+ years of experience in providing accurate predictions and effective remedies.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center hover:bg-amber-800/50 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-amber-400" />
              </div>
              <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center hover:bg-amber-800/50 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-amber-400" />
              </div>
              <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center hover:bg-amber-800/50 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-100 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-100 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-amber-100 hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-amber-100 hover:text-amber-400 transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-100 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-amber-100">Kundli Reading</li>
              <li className="text-amber-100">One Question Reading</li>
              <li className="text-amber-100">Chat Consultation</li>
              <li className="text-amber-100">Phone Consultation</li>
              <li className="text-amber-100">Video Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-amber-100">+91 9799568414</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-amber-100">rajkumar196712@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <span className="text-amber-100">
                  Bhatthron Ka Chowk <br />
                  Near Jugal Bhawan<br />
                  Bikaner
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-400/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-100 text-sm">
              © 2024 Pandit Rajkumar Ji. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-amber-100 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-amber-100 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-amber-100 hover:text-amber-400 text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}