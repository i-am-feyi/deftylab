import { Button } from "@/components/ui/button";
import React from "react";

const CTA = () => {
  return (
    <section className="mt-48 lg:mt-60">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-center text-center *:leading-[130%]">
          <p className="max-w-[45rem] mx-auto font-bold text-3xl sm:text-4xl md:text-5xl">
            Join the program that's helped hundreds of businesses make or save $100k+ per
            year using AI
          </p>
          <p className="max-w-4xl mx-auto text-xl mt-3 sm:text-2xl md:text-3xl">
            Our unique data, insights, A+ white-label AI dev team, and proven frameworks
            help anyone, regardless of background, even non-tech savvy people, take
            advantage of AI
          </p>
          <Button variant="gradient" size="xl" className="mt-10">
            Become a Client
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
