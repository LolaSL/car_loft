// pages/thank-you.js

import React from "react";
import { useRouter } from "next/router";

const ThankYou = () => {
  // Access the query parameter from the router
  const router = useRouter();
  const { fullname } = router.query;

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Thank You, {fullname}!</h1>
        <p>Your message has been sent successfully.</p>
        <p>We will get back to you as soon as possible.</p>
      </div>
    </div>
  );
};

export default ThankYou;

