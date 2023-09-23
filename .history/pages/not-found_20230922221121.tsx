"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import styles from "../styles/styles.module.css";

const Error:React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
      <h1 className="text-center">404</h1>
        <h2>Something is going wrong... </h2>
      </div>
    </div>
  );
};

export default Error;

// export default Error;
// export default function NotFoundPage(){
//   return (
//         <div className={styles.wrapper}>
//       <main className="text-center">
//         <title>Error</title>
//       </main>
//       <div>
//       <h1 className="text-center text-3xl">404</h1>
//         <h2>There was a problem</h2>
//         <p>We could not find the page you were looking for</p>
//         <p>Go back to <Link href="/">Home page</Link></p>
//         <div className="link font-bold mb-4 mt-14">
//         <Link href="/" style={{ color: "blue", textDecoration: "none" }}>
//           {" "}
//           Go Back
//         </Link>
//       </div>
//       </div>
//     </div>
//   )
// }
