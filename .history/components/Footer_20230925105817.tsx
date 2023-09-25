"use client"

import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";


export default function Footer() {
  
  return (
  <footer className='flex flex-col text-black-100  mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <Image src='/car-logo.png' alt='logo' width={118} height={14} className='object-contain' />
      </div>
      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
           
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
  <div className="flex">
        <p className="mb-4 md:mb-0 me-3">&copy; {new Date().getFullYear()} Copyright: Car LOFT</p>
</div>
  <div className="flex flex-wrap">
    <Link href="/privacypolicy" className="text-gray-500 mr-4 mb-2 md:mb-0">
      Privacy & Policy
    </Link>
    <Link href="/termsandconditions" className="text-gray-500">
      Terms & Condition
    </Link>
  </div>
</div>

  </footer>
  )
}