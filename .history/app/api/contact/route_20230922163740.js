import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, phone, reg, email, carModel, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, phone, reg, email, carModel, message });
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
// // pages/api/contact.js
// import connectDB from "@/app/lib/mongodb";
// import Contact from "@/app/models/contact";
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       await connectDB();
//       const { fullname, phone, reg, carModel, email, message } = req.body;

//       // Save the contact information to MongoDB
//       await Contact.create({ fullname, phone, reg, carModel, email, message });

//       // Send an email
//       const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//           user: "car.loft.re.n.t@gmail.com", // Replace with your Gmail address
//           pass: "lolik1968",  // Replace with your Gmail password or an App Password
//         },
//       });

//       const mailOptions = {
//         from: "car.loft.re.n.t@gmail.com",
//         to: "car.loft.re.n.t@gmail.com", // Replace with the recipient's email address
//         subject: "New Contact Form Submission",
//         text: `
//           Full Name: ${fullname}
//           Phone Number: ${phone}
//           Registration: ${reg}
//           Desired Car Model: ${carModel}
//           Email: ${email}
//           Message: ${message}
//         `,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("Error sending email:", error);
//           res.status(500).json({ msg: "Unable to send message." });
//         } else {
//           console.log("Email sent:", info.response);
//           res.status(200).json({
//             msg: "Message sent successfully",
//             success: true,
//           });
//         }
//       });
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ msg: "Unable to send message." });
//     }
//   } else {
//     res.status(405).json({ msg: "Method not allowed" });
//   }
// }
