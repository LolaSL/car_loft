
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import globals from "../app/styles/globals.css";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
<div className={`min-h-screen rounded-md m-4 py-6 justify-center  items-center bg-gray-200  px-16 text-justify text-blue-800 ${globals}`}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
      <h1 className="text-center text-3xl mb-4">404</h1>
        <h2 className="text-center text-2xl">Something is going wrong... </h2>
      </div>
    </div>
  );
};

export default Error;



