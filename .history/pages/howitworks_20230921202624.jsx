"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div
      className={`min-h-screen  m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title"> How it works </h1>
      <div className="show__image  mb-3 mt-6 ">
        <Image
          className="responsive"
          width="600"
          height="400"
          src="/comming_soon.png"
          alt="like"
        />
      </div>
      <h3 >
        How does our service work?
      </h3>
      <p>
        We make it easy for your search of desired cars. And our search
        results page tells you how many of them might be right for you, based on
        what you’ve told us.
      </p>
      <p>
        When you book your car, you enter into a contract with us: we’re
        agreeing to arrange and manage* your Booking.
      </p>{" "}
      <p>
        When you sign your Rental Agreement at the counter, you enter into a
        contract with Car Loft: we are agreeing to provide the car. You’ll
        already have seen and accepted all the key terms (while you were booking
        the car). *
      </p>
      <p>
        {" "}
        We’re here for you if you need to change or cancel your Booking, or if
        you have any questions – before, during or after your rental We would like you to enjoy your time with us.
      </p>
      <h3 >Payments</h3>
      <p>
        When you book a car in our Contact Us form, we will organise your
        payment.{" "}
      </p>
      <h3>
        Help and advice - if the unexpected happens.
      </h3>
      <p>
        If you have any questions, or something doesn’t go according to your
        plan, just:
        <strong className="p-2">
          <Link
            href="/contact"
            style={{ color: "blue", textDecoration: "none" }}
        
          >
            Contact Us
          </Link>
        </strong>
      </p>
      <h3 >
        If it’s about something that happened during your rental, we’ll be able
        to help you more quickly if you provide:
      </h3>
      <div>
        <ol className=" mb-3 mt-6">
          <li>
            - your Booking reference number, and the email address you used when
            you booked your car
          </li>
          <li>
            - a summary of the issue, including how you’d like us to help you
            details of anything you’ve been charged
          </li>
          <li>
            - any supporting documents (bank statement, rental agreement, final
            invoice, damage documentation, photos, boarding pass, receipts,
            etc.).
          </li>
        </ol>
      </div>
      <p>
        If you do that, one of our agents will be in touch as soon as possible.
        They might need to ask you for some more details. Whatever the issue, we
        will try to assist you (which includes handling any request or
        complaint), and will do what we can to help you.
      </p>
      <div className="link  font-bold  mb-3 mt-6 text-blue-800">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;
