"use client";
import React from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div
      className={`min-h-screen rounded-md m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title">Privacy Policy</h1>
      <p >Effective Date: 08.26.2023</p>
      <p >
        At Car Loft, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your personal information when
        you use our car rental services. By accessing or using our services, you
        agree to the terms of this Privacy Policy
      </p>
      <h3 >
        1. Information We Collect
      </h3>
      <span>
        <p>We may collect the following types of information from you:</p>
        <ul>
          <li>
           - Personal Information: This includes your name, contact details, your car
            registration number (reg), ID card/passport, and driver's license
            information.
          </li>
          <li>
           - Payment Information: We may collect credit or debit card details for
            deposit purposes or accept cash payments.
          </li>
          <li>
           - Driving Record: We require a clean driving record and may check your
            driving history to ensure you meet our requirements.
          </li>
        </ul>
      </span>
      <h3>3. Data Sharing</h3>
      <span >
        <p>We may share your information with the following parties:</p>
        <ul>
          <li>
           - Rental Locations: Your information may be shared with our branch
            locations to fulfill your rental request.
          </li>
          <li>
           - Legal Compliance: We may disclose your information to comply with
            legal obligations or respond to legal requests.
          </li>
        </ul>
      </span>
      <h3 >4. Data Security</h3>
      <p >
        We implement security measures to protect your information from
        unauthorized access, alteration, or disclosure. However, no method of
        transmission over the internet or electronic storage is completely
        secure, and we cannot guarantee absolute security.
      </p>
      <h3>5. Your Choices</h3>
      <span >
        <ul>
          <li>
          -  Smoking Policy: Our vehicles are smoke-free. Smoking is prohibited,
            and fees may apply for violation of this policy.
          </li>
          <li>
          -  Additional Drivers: You can add up to two additional drivers per
            rental.
          </li>
          <li>
          -  Cancellation: You have the option to cancel your booking. Free
            cancellation is available until 48 hours before the rental start
            date.
          </li>
        </ul>
      </span>
      <h3>6. Deposit and Refund</h3>
      <span>
        <p>
          Deposit Release: After returning the car without damage, your
          deposit/guarantee amount will be refunded to your credit card within 7
          to 21 working days.
        </p>
      </span>
      <h3 >7. Questions and Contact</h3>
      <span >
        <p>
          If you have any questions or concerns about our Privacy Policy or the
          handling of your personal information, you can contact us by email or
          phone.
        </p>
        <p>Email: [car.loft.re.n.t@gmail.com]</p>
        <p>Phone: [+972 xxxx xxx xxx]</p>
      </span>
      <h3 >
        8. Changes to Privacy Policyt
      </h3>
      <span >
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or legal requirements. We encourage you to review this policy
          periodically.
        </p>
        <p >
          By using our services, you consent to the collection, use, and sharing
          of your information as described in this Privacy Policy.
        </p>{" "}
      </span>
      <div className="link  font-bold  mb-3 mt-6">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
