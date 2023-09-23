"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import Image from "next/image";

const Faqs = () => {
  return (
    <div
      className={`min-h-screen rounded-md m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title">
        {" "}
        Frequently Asked Questions
      </h1>
      <div className="show__image  mb-3 mt-6 ">
        <Image
          className="responsive"
          width="600"
          height="400"
          src="/faqs.png"
          alt="freequently asked questions"
          priority
        />
      </div>
      <h3>
        Car rental pickup and dropoff locations?
      </h3>
      <p>
        Tel Aviv Ben Gurion International Airport, Therminal 3. Our office is 15
        min drive from airport.
      </p>
      <h3>
        How old do I need to be to rent a car?
      </h3>
      <p>
        With many rental companies, you must be at least 21 years of age to rent
        a car, and any driver under 25 may have to pay a Young Driver Fee.
        Similarly, people aged 70+ may find some companies will charge a Senior
        Driver Fee, or may not rent to them at all. So car rental for the
        under-25s or over-70s can be more expensive – which is one more reason
        to book with Rentalcars.com, as we work with all the big brands. Just
        check each car’s terms and conditions to see if your age would make any
        difference.
      </p>
      <h3>
        What do you need to rent a car?
      </h3>
      <p>1. An ID card/passport</p>
      <p>2. Valid Driver’s License</p>
      <p>3. Credit or Debit Card for Deposit/ Cash </p>
      <p>4. Clean Driving Record</p>
      <p>
        5. Fuel isn’t included in the cost of your rental.
      </p>
      <h3>
        Will you check my driving record?
      </h3>
      <p>
        You need a clean driving record and a valid driver’s license to drive a
        Car LOFT rental car. Car LOFT may check your driving record to confirm
        you meet our requirements.
      </p>
      <h3>
        Is smoking permitted in rental cars?
      </h3>
      <p>
        No. Car LOFT maintains a 100% smoke-free fleet in the U.S. and Canada,
        and any type of smoking (pipe, cigarette, cigar) is prohibited in all
        Car LOFT vehicles. Just as renters are assessed a fee for cleaning the
        car's interior for excessive stains, dirt or soiling attributable to the
        renter’s use, customers will be assessed an additional charge if the car
        smells of smoke when it is returned.
      </p>
      <p>
        Rent a Car LOFT car and breathe easy — because our stringent no-smoking
        policy is your assurance of a 100% smoke-free fleet. Isn’t it nice to
        know that, in this world of uncertainty, you can always depend on Car
        LOFT for a clean, well-maintained, fresh-smelling vehicle?{" "}
      </p>
      <h3>Additional Drivers</h3>
      <p>
        {" "}
        Car LOFT allows up to two additional drivers per rental.
      </p>
      <h3>
        What happens if I return my car rental early?
      </h3>
      <p>
        If you return you vehicle earlier than expected then no refund applies.
      </p>
      <h3>
        Do you offer one-way car rentals?
      </h3>
      <p>
        Yes, you can rent a car and drive one-way between most of our branch
        locations, subject to availability.
      </p>
      <h3>How do I pay my booking?</h3>
      <p>
        {" "}
        You can pay at office of Car LOFT. Keep in mind that when you will pick
        up the car the 'Payable at Desk' amount will be in the local currency of
        your destination.
      </p>
      <h3>
        What is included in the rental price?
      </h3>
      <ol className="mb-3 mt-6">
        <li>Unlimited kilometers</li>
        <li>17% Vat</li>
        <li>Collision Damage Waiver (CDW)</li>
        <li>Gravel Protection (GP)</li>
        <li>Theft Protection (TP)</li>
        <li>Super Collision Damage Waiver (SCDW)</li>
        <li>1 free additional driver</li>
      </ol>
      <h3>
        When will my deposit be released?
      </h3>
      <p>
        {" "}
        Once you return the car back without a damage, the deposit/guarantee
        amount will be released/ refunded to your credit card. This transaction
        usually takes from 7 to 21 working days to appear. Contact your bank
        first in order to check it.
      </p>
      <h3>Cancellations?</h3>
      <p>
        Free cancellation until 48 hours before the start of the rental.
      </p>
      <p>
        You can send us a e-mail or call our office and let us know that you
        will be cancelling your booking.
      </p>
      <p>
        Please include your booking number in all correspondance. We will send
        you an e-mail back to confirm your cancellation.
      </p>
      <h3>
        Do I have to return the car with a full tank?
      </h3>
      <p>
        If you got the car with a full tank then the car should be returned with
        a full tank.
      </p>
      <p>
        Otherwise you should return the car with the same amount of fuel as it
        was when you received it. The amount will be marked on your rental
        contract.
      </p>
      <h3>
        Fines, Parking tickets, traffic violations
      </h3>
      <p>
        Parking tickets and any traffic violations are the responsibility of the
        renter who must pay them before returning the vehicle. Congestion
        charges or fines received by us after the rental will be charged
        directly to the renter, including a surcharge for late payment, if any.
        A local administration fee applies: this will be charged in addition to
        the fines.
      </p>
      <div className="link  font-bold  mb-3 mt-6">
        <Link href="/contact" style={{ color: "blue", textDecoration: "none" }} className="flex justify-center items-center">
          Contact Us
        </Link>
        <div className="link  font-bold  mb-3 mt-6">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link></div>
      </div>
    </div>
  );
};

export default Faqs;
