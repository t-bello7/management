"use client"
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components";
import { heroImg } from "@/assets/images";

const Hero: FC = () => {
  return (
    <section className="relative bg-blue-2 px-4 py-8 lg:py-16">
      <div className="container mx-auto grid gap-8 text-center md:gap-12 lg:grid-cols-2 lg:text-left items-center">
        {/* Text Content */}
        <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
          <h2 className="font-sfProDisplayBold text-[#101E38] font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Elevate Your Facility Management Experience
          </h2>
          <p className="text-sm md:text-base text-[#71717A]">
            We go beyond maintenance — delivering smart, reliable, and tailored facility solutions that promote cleanliness, safety, and operational efficiency. Partner with us to create spaces where people and businesses thrive.
          </p>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center lg:justify-start">
            <Button variant="primary">Schedule Consultation</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative max-w-[90%] mx-auto lg:max-w-full">
          <Image
            src={heroImg}
            alt="hero image"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
