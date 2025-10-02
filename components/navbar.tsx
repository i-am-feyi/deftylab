"use client";

import { useModalStore } from "@/store/use-modal-store";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { open } = useModalStore();

  const handleBookCall = () => {
    open();
  };

  return (
    <>
      <div className="mt-5 w-full px-6 py-4 rounded-full">
        <div className="flex gap-4 justify-center md:justify-between items-center">
          <div>
            <Link href="/">
              <Image src="/logo-black.png" alt="DeftyLab Logo" width={200} height={200} />
            </Link>
          </div>
          <div className="hidden md:flex">
            <Button
              size="lg"
              className="text-white rounded-full text-xl font-semibold md:font-bold px-8 py-6"
              onClick={handleBookCall}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
