import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-[#222122] px-6 py-4 rounded-full">
      <div className="flex gap-4 justify-between items-center">
        <div>
          <Link href="/">
            <Image src="/logo-white.png" alt="DeftyLab Logo" width={150} height={150} />
          </Link>
        </div>
        <div className="hidden md:flex gap-4 text-white  font-medium text-xl *:hover:text-[#A862F6] *:active:text-[#A862F6] *:transition-all">
          <Link href="#">Case Studies</Link>
          <Link href="#testimonial">Testimonials</Link>
        </div>
        <div>
          <Button
            size="lg"
            className="text-white rounded-full text-lg font-semibold md:font-bold"
          >
            Work with us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
