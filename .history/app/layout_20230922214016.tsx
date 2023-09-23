import "./styles/globals.css";
import { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import Error from "@/pages/error"; // Import the error page

const metadata: Metadata = {
  title: "CarLoft",
  description: "Find, book, or rent the best car in the world",
};

interface RootLayoutProps {
  children: React.ReactNode;
  isErrorPage?: boolean; // Add a flag to identify if it's an error page
}

export default function RootLayout({ children, isErrorPage }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description || undefined} />
        <title>{metadata.title as React.ReactNode}</title>
      </head>
      <body className="relative">
        <Navbar />
        {isErrorPage ? (
          <Error />
        ) : (
          children
        )}
        <Footer />
      </body>
    </html>
  );
}






