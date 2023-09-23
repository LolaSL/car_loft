"use client";

import React, { useState } from "react";
import globals from "../app/styles/globals.css";
import Link from "next/link";
import { CustomButton, ShowMore } from "@components";
import axios from "axios";

function News() {

  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const url = `https://newsapi.org/v2/everything?domains=autocar.co.uk,autoblog.com&pageSize=28&apiKey=640e78c8d6d7466faf6e27fcfe8102ec`;
  
  
  const toggleFetching = () => {
    setIsFetching(!isFetching);
    if (!isFetching) {
      GetNews();
    } else {
      setData(null);
    }
  };
  const GetNews = () => {
    axios
      .get(url)
      .then((response) => {
        console.clear();
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`min-h-screen m-6 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}
    >
      <h1 className="article__title ">Latest News and Auto-Blog</h1>
      <p>
        Want To Know What Happened Today In The Cars World? Find Out Now The
        Latest News and Videos From AUTOCAR and AUTOBLOG Sources. Just Be
        Updated.
      </p>
      <CustomButton
  btnType="button"
  title={isFetching ? "Close" : "Get Latest News"}
  containerStyles="bg-primary-blue rounded-full text-white"
  handleClick={() => {
    toggleFetching();
    if (!isFetching) {
      GetNews();
    }
    
  }}
/>
      <div className="news__articles-wrapper">
        {data &&
          data.articles.map((d, index) => {
            return (
              <div key={index} className="article-card group ">
                <div
                  className="relative w-full h-50 "
                  style={{ borderRadius: "8px", overflow: "hidden" }}
                >
                  <img
                    src={d.urlToImage}
                    alt="image"
                    className="img-thumbnail  mb-3 mt-6 rounded "
                  />
                </div>
                <p className="font-lighter mb-2">{d.author}.  "{d.source.name}" </p>
                <p className="text-sm text-black-200 mb-2">{d.publishedAt}</p>
                <p className=" font-extrabold">{d.title}</p>
          
                <div>
                  <Link
                    href={`${d.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-3 mt-6 text-orange-800  text-[16px] leading-[38px] font-extrabold rounded decoration-secondary-orange"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
      </div>

      <div className="link  font-bold  mb-3 mt-6">
        <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
          {" "}
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default News;
