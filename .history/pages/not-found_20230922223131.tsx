// pages/_error.tsx
import Link from "next/link";

interface ErrorPageProps {
  statusCode?: number; // Define the type of statusCode as a number
}

const CustomErrorPage: React.FC<ErrorPageProps> = ({ statusCode = 404 }) => {
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
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default CustomErrorPage;
;
