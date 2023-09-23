import { useRouter } from "next/navigation";
import styles from "../styles/styles.module.css";

const Error:React.FC = () => {
  const router = useRouter();



  return (
    <div className={styles.wrapper}>
      <main className="text-center">
        <title>Error</title>
      </main>
      <div>
      <h1 className="text-center text-3xl">404</h1>
        <h2>There was a problem</h2>
        <p>We could not find the page you were looking for</p>
      
      </div>
    </div>
  );
};

export default Error;

