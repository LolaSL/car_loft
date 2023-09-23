import Link from "next/link";

const NotFound = ({statusCode}) => {
  return (
    <div className="not-found">
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

export default NotFound;
