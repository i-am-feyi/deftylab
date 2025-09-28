import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto mt-4">
        <Navbar />
        <div className="flex flex-col gap-6 text-center mt-8 lg:mt-24">
          <h1 className="lg:max-w-4xl xl:max-w-5xl mx-auto px-3 font-black text-[2.57rem] lg:text-5xl xl:text-6xl mt-6 md:mt-12 leading-[110%] md:leading-[125%] xl:leading-[120%]">
            <span className="text-[1.5rem] md:text-3xl">Remodelling Contractors:</span>
            <br />
            Book an Extra <span className="text-[#6631A1]">2-3 Remodeling Jobs</span>{" "}
            using our <span className="text-[#6631A1]">RemodelerAI Growth Engine!</span>
          </h1>
          <p className="max-w-3xl mx-auto text-2xl md:text-3xl font-normal">
            Add an extra $10k-$50k/month to your business in the next 90-days using our
            RemodelerAI Growth Engine that works for you while you work!
          </p>
          <div>
            <Button size="xl" variant="gradient" className="mt-10">
              <p className="text-wrap">Scale Your Business Today!</p>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
