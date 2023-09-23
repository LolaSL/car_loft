"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import globals from "../app/styles/globals.css";

const Podcast = () => {
  return (
    <div
      className={`min-h-screen rounded-md m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title">Podcast</h1>
      <h3>
        {" "}
        Automotive Podcasts You Should Be Listening to Right Now
      </h3>
      <div className="show__image  mb-3 mt-6 ">
        <Image
      className="responsive rounded"
          width="600"
          height="400"
          src="/podcast.jpg"
          alt="podcast"
        />
      </div>
      <p>
        There’s literally a podcast for everything at this point. “The Pen
        Addict” is a podcast about pens and stationary and it has more than 270
        episodes. There’s a podcast about crowdfunding Christian musicians
        (specifically). There’s even a podcast about people on a UFO forum
        responding to each other. For some reason. And while that’s great, that
        also means there is a lot–a lot–of crap to wade through in order to find
        the good stuff. If you’re looking for the best automotive podcasts, that
        search can take you to some very dark places.
      </p>
      <p>
        So we thought we’d help narrow your search and save you hours upon hours
        of internet dumpster diving. Here are five of the our favorite
        automotive podcasts right now.
      </p>
      <h3>Car Talk</h3>
      <div className="show__image  mb-3 mt-6 ">
        <Image
          className="responsive rounded"
          width="600"
          height="400"
          src="/car_talk_logo.png"
          alt="car talks logo"
          priority
      
        />
      </div>
      <p>
        We might as well start with #1. Car Talk, by NPR, is the top rated
        automotive podcast (and radio show) on the planet. They’ve been
        producing it, in one form or another, for over 30 years. They talk about
        everything from buying trends, to service tips, to repair advice, and
        they’ll make you laugh while doing it. This one isn’t just for auto
        aficionados. Honestly, you don’t really have to know anything about cars
        to enjoy it. Car Talk is just flat out entertaining.
      </p>
      <h3>Car Stuff</h3>
      <p>
        Brought to you by the brilliant minds behind HowStuffWorks.com, CarStuff
        is great for people looking to learn more about cars. Recent topics have
        included: avoiding “hassle cars”, whether or not your car is making you
        sick, affordable dream cars, and abandoned auto factories around the
        world. These guys have produced more than 800 episodes, and you’ll learn
        a ton with each one.
      </p>
      <h3>The Smoking Tire</h3>
      <div className="show__image">
        <Image
          className="responsive rounded"
          width="600"
          height="400"
          src="/smoking-tire.png"
          alt="smoking tire logo"
          priority
      
        />
      </div>
      <p>
        Hosts Matt Farah, Zack Klapman, Chris Hayes, and Thad Brown talk to
        automotive legends, pro drivers, comedians, and anyone else who knows a
        lot about cars on this great automotive podcast. They discuss the latest
        auto news, racing, cool builds and mods, and anything else that’s
        topical. We should probably give you a parental advisory on this one.
        The Smoking Tire is no holds barred.
      </p>
      <h3>Everyday Driver</h3>
      <div className="show__image   ">
        <Image
          className="responsive"
          width="600"
          height="400"
          src="/everyday-driver.png"
          alt="everyday driver logo"
          priority
      
        />
      </div>
      <p>
        If you like your pods to have a little friction between hosts, then
        Everyday Driver is the automotive podcast for you. Paul and Todd answer
        listening questions each episode to help people find the right car for
        them. Disagreements abound. These guys will also keep you up to date
        about industry news and review auto-related films. It’s a fun time.
        Episodes are usually about an hour long, and they put out more than a
        podcast a week.
      </p>
      <div className="link  font-bold  mb-3 mt-6">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Podcast;
