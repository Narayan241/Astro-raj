import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { bookingId, imageUrl } = body;

    // Validate inputs
    if (!bookingId) {
      return NextResponse.json(
        { error: "bookingId is required" },
        { status: 400 }
      );
    }

    if (!imageUrl) {
      return NextResponse.json(
        { error: "imageUrl is required" },
        { status: 400 }
      );
    }

    // Create screenshot record
    const screenshot = await db.paymentScreenshot.create({
      data: {
        bookingId: Number(bookingId), // ensure numeric ID
        imageUrl,
        uploadedAt: new Date(),
      },
    });

    // Update booking status to completed
    const updatedBooking = await db.booking.update({
      where: { id: Number(bookingId) },
      data: { status: "completed" },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Screenshot saved and booking marked as completed.",
        screenshot,
        updatedBooking,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in saving payment screenshot:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong while saving payment screenshot.",
      },
      { status: 500 }
    );
  }
}
