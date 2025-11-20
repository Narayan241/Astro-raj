import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const paymentData = await request.json()
    
    // Save payment screenshot to database (you could create a PaymentScreenshot model)
    console.log('Payment screenshot received:', paymentData)
    
    // For now, just return success
    // In production, you might want to:
    // 1. Save to a PaymentScreenshot table
    // 2. Send email notification
    // 3. Update booking status to 'paid'
    
    // Update booking status to completed
    if (paymentData.bookingId) {
      await db.booking.update({
        where: {
          email: paymentData.clientInfo.email
        },
        data: {
          status: 'completed'
        }
      })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Payment screenshot saved successfully',
      data: paymentData 
    })
  } catch (error) {
    console.error('Payment screenshot error:', error)
    return NextResponse.json(
      { error: 'Failed to save payment screenshot' },
      { status: 500 }
    )
  }
}