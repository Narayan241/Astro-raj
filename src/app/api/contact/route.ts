import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, mobileNumber, phone, message } = body

    const contactMessage = await db.contactMessage.create({
      data: {
        name,
        email,
        mobileNumber: mobileNumber || null,
        phone: phone || null,
        message
      }
    })

    return NextResponse.json({ success: true, contactMessage })
  } catch (error) {
    console.error('Contact message creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create contact message' },
      { status: 500 }
    )
  }
}