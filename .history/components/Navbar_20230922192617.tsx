"use client";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/car-logo.png"
            alt="logo"
            width={118}
            height={14}
            className="object-contain"
          />
        </Link>

        <Link href="/contact" className="flex justify-center items-center">
          <CustomButton
            title="Contact Us"
            btnType="button"
            containerStyles="text-white rounded-full bg-gray-200 text-xl text-bolder min-w-[130px]"
          />
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;