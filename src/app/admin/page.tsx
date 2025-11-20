'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Calendar, Clock, CheckCircle, AlertCircle, Users, DollarSign, MessageSquare, LogOut, Eye, TrendingUp, Download } from 'lucide-react'

interface Booking {
  id: string
  fullName: string
  email: string
  mobileNumber?: string
  phone?: string
  service: string
  consultationType: string
  dateOfBirth: string
  timeOfBirth: string
  placeOfBirth: string
  question?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  amount: string
  createdAt: string
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('bookings')
  const router = useRouter()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/admin/login')
      return
    }

    fetchBookings()
  }, [session, status])

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/admin/bookings')
      if (response.ok) {
        const data = await response.json()
        setBookings(data)
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateBookingStatus = async (bookingId: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        fetchBookings()
      }
    } catch (error) {
      console.error('Failed to update booking:', error)
    }
  }

  const stats = {
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    completedBookings: bookings.filter(b => b.status === 'completed').length,
    totalRevenue: bookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => {
        const amount = parseInt(b.amount.replace('₹', '').replace(',', ''))
        return sum + amount
      }, 0)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500'
      case 'confirmed': return 'bg-blue-500'
      case 'completed': return 'bg-green-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />
      case 'confirmed': return <CheckCircle className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'cancelled': return <AlertCircle className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center px-4">
        <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-2 border-amber-400/50 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
            <p className="text-amber-100 mb-6">Please login to access admin dashboard.</p>
            <Link href="/admin/login">
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full transition-all duration-300">
                Go to Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 backdrop-blur-sm border-b border-amber-400/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <Badge className="bg-amber-500 text-white px-4 py-2">
                Pandit Rajkumar Ji
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-amber-100 text-sm">Welcome, {session.user?.email}</span>
              <Button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-amber-900/30 to-yellow-900/30 backdrop-blur-sm border-r border-amber-400/30 min-h-screen">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeTab === 'bookings' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeTab === 'bookings' ? 'bg-amber-500 text-white' : 'text-amber-100 hover:bg-amber-900/30'}`}
              onClick={() => setActiveTab('bookings')}
            >
              <Calendar className="w-5 h-5 mr-3" />
              View Bookings
            </Button>
            
            <Button
              variant={activeTab === 'services' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeTab === 'services' ? 'bg-amber-500 text-white' : 'text-amber-100 hover:bg-amber-900/30'}`}
              onClick={() => setActiveTab('services')}
            >
              <Users className="w-5 h-5 mr-3" />
              Manage Services
            </Button>
            
            <Button
              variant={activeTab === 'payments' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeTab === 'payments' ? 'bg-amber-500 text-white' : 'text-amber-100 hover:bg-amber-900/30'}`}
              onClick={() => setActiveTab('payments')}
            >
              <DollarSign className="w-5 h-5 mr-3" />
              Payment History
            </Button>
            
            <Button
              variant={activeTab === 'messages' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeTab === 'messages' ? 'bg-amber-500 text-white' : 'text-amber-100 hover:bg-amber-900/30'}`}
              onClick={() => setActiveTab('messages')}
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Messages
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-100 text-sm">Total Bookings</p>
                    <p className="text-3xl font-bold text-white">{stats.totalBookings}</p>
                  </div>
                  <Calendar className="w-8 h-8 text-amber-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-100 text-sm">Pending</p>
                    <p className="text-3xl font-bold text-white">{stats.pendingBookings}</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-100 text-sm">Completed</p>
                    <p className="text-3xl font-bold text-white">{stats.completedBookings}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-100 text-sm">Revenue</p>
                    <p className="text-3xl font-bold text-white">₹{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bookings Table */}
          {activeTab === 'bookings' && (
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-amber-400/30">
                        <th className="text-left py-3 px-4 text-amber-100">Client</th>
                        <th className="text-left py-3 px-4 text-amber-100">Service</th>
                        <th className="text-left py-3 px-4 text-amber-100">Type</th>
                        <th className="text-left py-3 px-4 text-amber-100">Amount</th>
                        <th className="text-left py-3 px-4 text-amber-100">Status</th>
                        <th className="text-left py-3 px-4 text-amber-100">Date</th>
                        <th className="text-left py-3 px-4 text-amber-100">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-amber-400/20">
                          <td className="py-3 px-4">
                            <div>
                              <div className="text-white font-medium">{booking.fullName}</div>
                              <div className="text-amber-200 text-sm">{booking.email}</div>
                              <div className="text-amber-200 text-sm">{booking.mobileNumber || booking.phone || 'No phone'}</div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-amber-100">
                            {booking.service === 'kundli' ? 'Kundli Reading' : 'One Question'}
                          </td>
                          <td className="py-3 px-4 text-amber-100 capitalize">{booking.consultationType}</td>
                          <td className="py-3 px-4 text-amber-400 font-semibold">{booking.amount}</td>
                          <td className="py-3 px-4">
                            <Badge className={`${getStatusColor(booking.status)} text-white`}>
                              <div className="flex items-center">
                                {getStatusIcon(booking.status)}
                                <span className="ml-1 capitalize">{booking.status}</span>
                              </div>
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-amber-100">
                            {new Date(booking.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline" className="border-amber-400/30 text-amber-100 hover:bg-amber-900/30">
                                <Eye className="w-4 h-4" />
                              </Button>
                              {booking.status === 'pending' && (
                                <Button 
                                  size="sm" 
                                  onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                  className="bg-green-500 hover:bg-green-600 text-white"
                                >
                                  Confirm
                                </Button>
                              )}
                              {booking.status === 'confirmed' && (
                                <Button 
                                  size="sm" 
                                  onClick={() => updateBookingStatus(booking.id, 'completed')}
                                  className="bg-blue-500 hover:bg-blue-600 text-white"
                                >
                                  Complete
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other Tabs Content */}
          {activeTab === 'services' && (
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Manage Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100">Service management functionality coming soon...</p>
              </CardContent>
            </Card>
          )}

          {activeTab === 'payments' && (
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <Download className="w-6 h-6 mr-2" />
                  Payment History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100">Payment history functionality coming soon...</p>
              </CardContent>
            </Card>
          )}

          {activeTab === 'messages' && (
            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-amber-100">Message management functionality coming soon...</p>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}