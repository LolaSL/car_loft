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
        <link
  rel="preload"
  href="./globals.css"
  as="style"
  onLoad={(event) => {
    event.currentTarget.onload = null; // Remove the event handler after load
    event.currentTarget.rel = 'stylesheet'; // Set the rel attribute to 'stylesheet'
  }}
/>

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