import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto mt-4">
        <Navbar />
        <div className="flex flex-col gap-6 text-center mt-8 lg:mt-24">
          <h1 className="lg:max-w-4xl xl:max-w-5xl mx-auto px-4 font-black text-[3.5rem] lg:text-7xl xl:text-8xl mt-6 md:mt-12 leading-[125%] italic">
            We Help <span className="text-[#903DE2]">Real Estate</span> Agents 3x Their
            GCI
          </h1>
          <p className="max-w-3xl mx-auto text-3xl font-normal">
            We partner with service based businesses to help them save & make money with
            AI.
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
