
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/styles.module.css";
import { usePathname, useSearchParams } from 'next/navigation';

const NotFound:React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url)
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [pathname, searchParams]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
      <h1 className="text-center">404</h1>
        <h2> Page Not Found... </h2>
      </div>
    </div>
  );
};

export default NotFound;



