import Link from "next/link";

const NotFound = ({statusCode}) => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
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
