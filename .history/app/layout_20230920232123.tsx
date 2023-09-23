// import Script from "next/script";
// import "./globals.css";
// import { Metadata } from "next";
// import { Footer, Navbar } from "@/components";

// const metadata: Metadata = {
//   title: "CarLoft",
//   description: "Find, book, or rent the best car in the world",
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content="#000000" />
//         <meta name="description" content={metadata.description || undefined} />
//         {/* Remove the <link> element for preload */}

//         <title>{metadata.title as React.ReactNode}</title>
//       </head>
//       <body className="relative">
//         <Navbar />
//         {children}
//         <Footer />

       
//         <Script
//           strategy="lazyOnload" 
//           src="/globals.css" 
//           onLoad={() => {
//             // This function runs when the CSS file is loaded
//           }}
//         />
//       </body>
//     </html>
//   );
// }
import { useEffect } from "react";
import { Metadata } from "next";
import { Footer, Navbar } from "@/components";

const metadata: Metadata = {
  title: "CarLoft",
  description: "Find, book, or rent the best car in the world",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    // Create a <link> element for CSS preload
    const link = document.createElement("link");
    link.href = "./globals.css"; // Specify the path to your CSS file
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = "all";

    // Add the <link> element to the <head>
    document.head.appendChild(link);

    // Remove the <link> element when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Empty dependency array to run the effect once

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
        {children}
        <Footer />
      </body>
    </html>
  );
}







