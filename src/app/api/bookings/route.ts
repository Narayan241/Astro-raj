import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Debug: Log the received body
    console.log('Received booking data:', body)
    
    const {
      fullName,
      email,
      mobileNumber,
      phone,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      service,
      consultationType,
      question,
      whatsappNumber
    } = body

    // Debug: Check if email exists
    console.log('Email extracted:', email)
    console.log('Email type:', typeof email)

    if (!email) {
      console.error('Email is missing from request body')
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Calculate amount based on service and consultation type
    let amount = '₹0'
    if (service === 'kundli') {
      amount = '₹2100'
    } else if (service === 'question') {
      switch (consultationType) {
        case 'chat':
          amount = '₹500'
          break
        case 'phone':
          amount = '₹1100'
          break
        case 'video':
          amount = '₹1600'
          break
      }
    }

    const booking = await db.booking.create({
      data: {
        fullName,
        email,
        mobileNumber: mobileNumber || null,
        phone: phone || null,
        dateOfBirth,
        timeOfBirth,
        placeOfBirth,
        service,
        consultationType,
        question: question || null,
        whatsappNumber: whatsappNumber || null,
        amount
      }
    })

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const bookings = await db.booking.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(bookings)
  } catch (error) {
    console.error('Bookings fetch error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}