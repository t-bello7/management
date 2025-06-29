"use client"
import Image from "next/image";
import { FC } from "react";
import { Button } from "@/components";
import {
  heroImg
} from "@/assets/images"

const Hero: FC = () => {
  return(
  <section className="grid gap-8   md:grid-cols-2 lg:h-screen lg:gap-0 bg-blue-2">
    <div className="grid top-0 justify-items-center space-y-8 max-w-[88%] container">
      <h2 className="font-sfProDisplayBold text-[#101E38] text-center font-extrabold text-4xl">
        Elevate Your Facility Management Experience
      </h2>
      <span className="text-xs text-center text-[#71717A]">
        We go beyond maintenance — delivering smart, reliable, and tailored facility solutions that promote cleanliness, safety, and operational efficiency. Partner with us to create spaces where people and businesses thrive.
      </span>
      <div className="flex gap-2 container mx-auto max-w-[80%]">
        <Button variant="primary">
          Shedule Consultation
        </Button>
        <Button variant="outline">
          Learn More
        </Button>
      </div>
    </div>
    <div className="max-w-[95%] container">
      <Image 
      src={heroImg}
      alt="hero image"
      className=""
    />
    </div>
    

  </section>
)};

export default Hero;
