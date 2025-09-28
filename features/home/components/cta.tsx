import { Button } from "@/components/ui/button";
import React from "react";

const CTA = () => {
  return (
    <>
      <section className="mt-28 lg:mt-60">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 items-center text-center *:leading-[115%]">
            <p className="max-w-[45rem] mx-auto font-bold text-3xl sm:text-4xl md:text-5xl">
              One system handles your leads, follow-up, and reviews. You just show up to
              do the work
            </p>
            <p className="max-w-4xl mx-auto text-xl mt-3 sm:text-2xl md:text-3xl">
              Join the wave of AI that's helped hundreds of businesses make and save
              $100k+ per year using proven AI systems.
            </p>
            <Button variant="gradient" size="xl" className="mt-10">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-28 lg:mt-60">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4 items-center text-center *:leading-[115%] lg:px-16">
            <h2 className="max-w-[45rem] mx-auto font-bold text-3xl sm:text-4xl md:text-5xl">
              The Problem
            </h2>
            <div className="max-w-4xl mx-auto text-xl mt-3 sm:text-2xl md:text-2xl">
              <ul className="flex flex-col gap-3">
                <li>❌ Working 60 Hrs/week and still take home less than $100k.</li>
                <li>❌ Referrals alone won't get you to $1M.</li>
                <li>
                  ❌ If you're not first to call a lead, you've already lost the job.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center text-center *:leading-[115%] lg:px-16">
            <h2 className="max-w-[45rem] mx-auto font-bold text-3xl sm:text-4xl md:text-5xl">
              Our Solution
            </h2>
            <p className="max-w-4xl mx-auto text-xl mt-3 sm:text-2xl md:text-2xl">
              <ul className="flex flex-col gap-3">
                <li>
                  ✅ One System That Generates Leads, Books Jobs, and Builds Your
                  Reputation on Autopilot.
                </li>
                <li>✅ Go From ‘Feast or Famine’ to Fully Booked Crews Year-Round.</li>
                <li>
                  ✅ The Proven AI Growth Engine That Pays for Itself With Just One Job.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
