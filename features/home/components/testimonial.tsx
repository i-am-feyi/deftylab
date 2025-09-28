import { Button } from "@/components/ui/button";
import React from "react";

const Testimonial = () => {
  return (
    <section className="mt-28 lg:mt-60" id="testimonial">
      <div className="container mx-auto">
        <div className="border-2 border-[#6631A1] py-10 rounded-xl flex flex-col gap-4 items-center text-center *:leading-[130%] px-4 ">
          <p className="max-w-2xl mx-auto font-bold text-4xl md:text-6xl">
            Ready to Add $250k+ In Revenue This Year?
          </p>
          <Button variant="gradient" size="xl" className="mt-6">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
