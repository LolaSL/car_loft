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
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default CustomErrorPage;
In this example, we display a custom error message and provide a link to the home page. The statusCode prop is passed automatically by Next.js and represents the HTTP status code for the error (e.g., 404 for "Not Found").

Customize the error page as needed. You can style it and provide any additional content or features.

Save the file.

Next.js will automatically use this _error.js file as the error handler for any routing errors. When a user accesses a route that doesn't exist, they will be directed to this custom error page with the appropriate status code (e.g., 404).

You can also customize the error handling further by adding additional logic to the _error.js file, such as logging or handling specific error cases.

With this setup, your custom error page will be displayed automatically for any routing errors in your Next.js application.






    </div>
  );
};

export default NotFound;
