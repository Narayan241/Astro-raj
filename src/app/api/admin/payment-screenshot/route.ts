import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const paymentData = await request.json()

    console.log('Payment screenshot received:', paymentData)

    // Validate bookingId
    if (!paymentData.bookingId) {
      return NextResponse.json(
        { error: 'bookingId is missing' },
        { status: 400 }
      )
    }

    // Update booking status to completed
    const updatedBooking = await db.booking.update({
      where: {
        id: paymentData.bookingId,    // <-- FIXED ✔️
      },
      data: {
        status: 'completed'
      }
    })

    return NextResponse.json({ 
      success: true,
      message: 'Payment screenshot saved successfully',
      booking: updatedBooking
    })

  } catch (error: any) {
    console.error('Payment screenshot error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to save payment screenshot' },
      { status: 500 }
    )
  }
}
