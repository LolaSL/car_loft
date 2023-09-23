import Script from "next/script";
import "./globals.css";
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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={metadata.description || undefined} />
        {/* Remove the <link> element for preload */}

        <title>{metadata.title as React.ReactNode}</title>
      </head>
      <body className="relative">
        <Navbar />
        {children}
        <Footer />

       
        <Script
          strategy="lazyOnload" // Lazy-load the CSS
          src="/globals.css" // Path to your CSS file
          onLoad={() => {
            // This function runs when the CSS file is loaded
          }}
        />
      </body>
    </html>
  );
}







// import "./globals.css";

// import { Footer, Navbar } from "@/components";

// export const metadata = {
//   title: "Car LOFT",
//   description: "Discover world's best car showcase application",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en'>
//       <body className='relative'>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }