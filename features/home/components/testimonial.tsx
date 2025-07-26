import { Button } from "@/components/ui/button";
import React from "react";

const Testimonial = () => {
  return (
    <section className="mt-48 lg:mt-60" id="testimonial">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-center text-center *:leading-[130%]">
          <p className="max-w-2xl mx-auto font-bold text-4xl md:text-6xl">
            "The best company to help you implement AI, hands down!!!"
          </p>
          <p className="max-w-3xl mx-auto text-2xl mt-3">- Tracy Williams</p>
          <Button variant="gradient" size="xl" className="mt-6">
            Become a Client
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
