import Image from "next/image";
import Link from "next/link";
// import { MoveRight } from "lucide-react";

// const links: {
//   id: number;
//   label: string;
//   href: string;
// }[] = [
//   {
//     id: 1,
//     label: "Case Studies",
//     href: "#",
//   },
//   {
//     id: 2,
//     label: "Testimonial",
//     href: "#testimonial",
//   },
//   {
//     id: 3,
//     label: "Become Our Client",
//     href: "/booking",
//   },
// ];

const Footer = () => {
  return (
    <section className="mt-28 mb-10 md:mb-20">
      <div className="container mx-auto bg-black rounded-4xl px-8 py-12 md:p-12 text-white">
        <div className="flex flex-col gap-6 md:flex-row justify-center">
          <div className="flex flex-col items-center gap-4">
            <Link href="/">
              <Image src="/logo-white.png" alt="DeftyLab Logo" width={200} height={200} />
            </Link>
            <div className="md:max-w-[23rem] text-xl font-medium text-center">
              Helping Remodelers Add $250K+/yr Using Our RemodelerAI Growth Engine
            </div>
          </div>
          {/* <div className="md:min-w-48">
            <p className="font-bold text-2xl">Quick Links</p>
            <div className="flex flex-col gap-2 mt-4">
              {links.map(({ id, href, label }) => (
                <div key={id} className="flex items-center gap-2">
                  <MoveRight className="opacity-50 size-4" />
                  <Link
                    href={href}
                    className="text-lg font-medium hover:text-[#A862F6] active:text-[#A862F6] transition-all duration-300 opacity-80 hover:opacity-100"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div> */}
        </div>
        <div className="max-w-11/12 mx-auto py-10">
          <div className="h-[1px] bg-white opacity-40 px-20" />
        </div>
        <div className="text-center text-lg">
          © 2025 DeftyLab LLC. All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
