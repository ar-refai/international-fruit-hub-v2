"use client";
import Image from "next/image";
import Link from "next/link";
import { CiLinkedin ,CiFacebook ,CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <section className="bg-darkprimary">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
                <Link href="/" className="text-base leading-6 text-white hover:text-opacity-80">
                    Home
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/about" className="text-base leading-6 text-white hover:text-opacity-80">
                    About
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/blog" className="text-base leading-6 text-white hover:text-opacity-80">
                    Products
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/services" className="text-base leading-6 text-white hover:text-opacity-80">
                    Services
                </Link>
            </div>
            <div className="px-5 py-2">
                <Link href="/contact" className="text-base leading-6 text-white hover:text-opacity-80">
                    Contact
                </Link>
            </div>
           
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-white text-3xl font-5xl hover:text-white">
                <span className="sr-only">Facebook</span>
                <CiInstagram  />
            </a>
            <a href="#" className="text-white text-3xl hover:text-white">
                <span className="sr-only">Instagram</span>
              <CiFacebook />
            </a>
            <a href="#" className="text-white text-3xl hover:text-white">
                <span className="sr-only">Twitter</span>
                <CiLinkedin />
            </a>
          
        </div>
        <p className="mt-8 text-base leading-6 text-center text-white">
            © 2024 International Froute Hub, Inc. All rights reserved.
        </p>
    </div>
</section>
    </>
  );
};

export default Footer;
