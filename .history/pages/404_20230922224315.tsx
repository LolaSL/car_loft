import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Import your link arrays
import { privacyPolicy, termsCondition, footerLinks } from "@/constants"; // Adjust the import path as needed

interface ErrorPageProps {
  statusCode?: number;
}

const CustomErrorPage: React.FC<ErrorPageProps> = ({ statusCode = 404 }) => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
    };
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
          <a>Home</a>
        </Link>
      </p>

      {/* Render dynamic links based on your arrays */}
      <div>
        <h2>Privacy Policy</h2>
        <ul>
          {privacyPolicy.map((item, index) => (
            <li key={index}>
              <Link href={item.link[0].url}>
                <a>{item.link[0].title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Terms & Conditions</h2>
        <ul>
          {termsCondition.map((item, index) => (
            <li key={index}>
              <Link href={item.link[0].url}>
                {item.link[0].title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Footer Links</h2>
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.url.startsWith("http") ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  ) : (
                    <Link href={link.url}>
                      <a>{link.title}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomErrorPage;



