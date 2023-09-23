"use client";

import React, { useState, useRef } from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/Reacttoastify.css"

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [reg, setReg] = useState("");
  const [carModel, setCarModel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const form = useRef();
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Phone Number: ", phone);
    console.log("Your Reg: ", reg);
    console.log("Desired Car Model: ", reg);
    console.log("Email: ", email);
    console.log("Message: ", message);

    //   const res = await fetch("api/contact", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, text/plain, */*",
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       fullname,
    //       phone,
    //       reg,
    //       carModel,
    //       email,
    //       message,
    //     }),
    //   });

    //   console.log("Fetch Response:", res);

    //   const { msg, success } = await res.json();

    //   setError(msg);
    //   setSuccess(success);

    //   if (success) {
    //     setFullname("");
    //     setPhone("");
    //     setReg("");
    //     setCarModel("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // };
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_5ulwj4a", // Replace with your EmailJS service ID
          "template_0vz67pw", // Replace with your EmailJS template ID
          form.current,
          "itbU-LS71y1ujnt30" // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            toast.success("Message sent successfuly!")
            console.log(result.text);
            // Handle success, e.g., set success state and clear form fields
            setSuccess(true);
            setFullname("");
            setPhone("");
            setReg("");
            setCarModel("");
            setEmail("");
            setMessage("");
            // After sending email, save data to MongoDB
            saveDataToMongoDB();
          },
          (error) => {
            console.log(error.text);
            // Handle error, e.g., set error state
            // setError(["Unable to send message."]);
            toast.error
          }
        );
    };
  
    const saveDataToMongoDB = async () => {
      try {
        const res = await fetch("api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            phone,
            reg,
            carModel,
            email,
            message,
          }),
        });
      
        console.log("Fetch Response:", res);
  
        const { msg, success } = await res.json();
  
        setError(msg);
        setSuccess(success);
  
        if (success) {
          setFullname("");
          setPhone("");
          setReg("");
          setCarModel("");
          setEmail("");
          setMessage("");
          // Redirect to a thank you page or any other desired page
          router.push("/thank-you");
        }
      } catch (error) {
        console.error("Error:", error);
        setError(["Unable to send message."]);
      }
    };
  
    return (
      <div
        className={`min-h-screen rounded-md m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
   
      >
        <div className="link font-bold mb-4 mt-14">
          <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
            {" "}
            Go Back
          </Link>
        </div>

        <h1 className="article__title">Contact Us</h1>

        <p>
          It is no longer a dream. Anyone can rent a hight quality class car from
          our variety vehicles on offer, for any purpose: a business meeting, VIP
          transportation, weddings and shooting days which are part of the
          experience, long-term rental, luxury vehicle rentals for tourists,
          international artists, VIP treatments, pick-ups from the airport, and etc.
        </p>
        <span className="font-bold">
          <p>Hours of operation:</p>
          <p>Sun to Thurs 9am - 7pm </p>
          <p> Fri 9am - 2pm </p>
          <p>Phone: +972 xxxx xxx xxx</p>
          <p>Email: car.loft.re.n.t@gmail.com</p>
          <p>
            Location: Israel, Tel Aviv Ben Gurion International Airport, Therminal
            3
          </p>
        </span>
        <div className="p-6 flex flex-col justify-center items-center">
          <form
            // onSubmit={handleSubmit}
            ref={form}
            onSubmit={sendEmail}
            className="form py-4 mt-4 border-t flex flex-col gap-5 mx-auto w-full"
          >
            <div>
              <label htmlFor="fullname">Full Name</label>
              <input
                className="input rounded-md text-black"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text"
                id="fullname"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="phone">Your Phone Number With Country Code</label>
              <input
                className="input rounded-md text-black"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="number"
                id="phone"
                placeholder="+972 1111111111"
              />
            </div>
            <div>
              <label htmlFor="reg">Your Reg</label>
              <input
                className="input rounded-md text-black"
                onChange={(e) => setReg(e.target.value)}
                value={reg}
                type="text"
                id="reg"
                placeholder="GF23XWD"
              />
            </div>
            <div>
              <label htmlFor="carModel">Desired Car Model</label>
              <input
                className="input rounded-md text-black"
                onChange={(e) => setCarModel(e.target.value)}
                value={carModel}
                type="text"
                id="carModel"
                placeholder="Alfa Romeo Giulia Awd"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="input rounded-md text-black"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                id="email"
                placeholder="john@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="h-32 textarea rounded-md text-black"
                id="message"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <button
              className="bg-green-700 p-3 text-white font-bold rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="bg-slate-100 flex flex-col rounded-md w-full">
            {error &&
              error.map((e, i) => (
                <div
                  key={i}
                  className={`${success ? "text-green-800 mb-4" : "text-red-600"
                    } px-5 py-2`}
                >
                  {e}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };


export default Contact;
