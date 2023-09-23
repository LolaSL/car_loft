import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/co";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, phone, reg, email, carModel, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, phone, reg, email, carModel,message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorMessages = Object.values(error.errors).map(
        (validationError) => validationError.message
      );
      console.log(errorMessages);
      return NextResponse.json({ msg: errorMessages });
    } else {
      console.error("Error:", error);
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}