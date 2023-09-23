import { useEffect } from "react";
import { useRouter } from "next/navigation";
import 


interface ErrorPageProps {
  statusCode?: number; 
}

const CustomErrorPage: React.FC<ErrorPageProps> = ({ statusCode = 404 }) => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }, [router]);
  return (
    <div className="error-page">
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : "An error occurred on the client"}
      </h1>
      <p>Sorry, this page could not be found.</p>
      <p>
        Go back to{" "}
        <Link href="/">
         Home
        </Link>
      </p>
    </div>
  );
};

export default CustomErrorPage;
;
