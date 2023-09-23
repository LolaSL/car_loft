import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
      <main className="text-center">
        <title>Error</title>
      </main>
      <div>
      <h1 className="text-center text-3">404</h1>
        <h2>Something is going wrong... </h2>
      </div>
    </div>
  );
};

export default Error;

