"use client";
import { FC } from "react";
import Image from "next/image";
import {
  star
} from "@/assets/icons"
import {
  introImg
} from "@/assets/images"

const aboutItems = [
  {
    icon: star,
    title: 'Professionalism',
    description: 'We deliver every service with accountability, consistency, and pride.'
  },
  {
    icon: star,
    title: 'Integrity',
    description: ' We operate transparently and honestly in all our client relationships.'
  },
  {
    icon: star,
    title: 'Customer-Centricity',
    description: 'We tailor our services to meet the unique needs of every client.'
  },
  {
    icon: star,
    title: 'Innovation',
    description: 'We embrace technology and new methods to deliver smarter facility solutions.'
  },
  {
    icon: star,
    title: 'Sustainability',
    description: 'We promote eco-friendly practices that reduce environmental impact.'
  }
]

const Intro: FC = () => {
  return (
    <section className="container mx-auto space-y-6 bg-[FAFFF4]" id="intro">
      <div>
        <h2 className="text-center text-primary uppercase font-maximaNouvaBold text-2xl">
          Our Core Values
        </h2> 
        <h3 className="text-2xl md:text-4xl font-maximaNouvaBold font-bold">
           The Principles That Guide Every Service, Every Team Member, Every Day.
        </h3>
        <p>
          At the heart of everything we do lies a strong commitment to excellence, integrity, and customer satisfaction — values that shape our culture and drive our performance.
        </p>
        <div className="grid container max-w-[85%]">
          {
            aboutItems.map(item => (
              <div key={item.title} className="p-4 space-y-2 border border-primary rounded-2xl">
                <Image className="w-6 md:w-9 aspect-square" src={item.icon} alt={item.title} />
                <h4 className="font-bold text-sm md:text-base text-primary"> {item.title} </h4>
                <p className="text-xs md:text-sm ">
                  { item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <Image src={introImg} alt="intro" />
    </section>
  );
};

export default Intro;
