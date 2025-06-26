import Image from "next/image";
import { FC } from "react";
import {
  checkmark,
  colors,
  bucket  
} from "@/assets/icons"

const info = [
  {
    title: "Proven Excellence & Reliability",
    icon: checkmark,
    text: "We’ve built a reputation for consistent, high-quality service delivery. Our experienced team follows standardized protocols and uses the latest tools and eco-friendly products to ensure every task meets the highest standards—on time, every time."
  },
  {
    title: "Comprehensive Solutions",
    icon: colors,
    text: "Whether it’s routine cleaning, technical maintenance, or specialized services like pest control or space management, we provide tailored solutions to meet your facility’s exact needs. Our integrated approach saves you time, money, and stress."
  },
  {
    title: "Eco-Conscious Approach",
    icon: bucket,
    text: "Your people’s health and the environment matter to us. That’s why we prioritize green cleaning methods, sustainable waste practices, and strict safety compliance, creating safer, healthier environments for all."
  }
]

const Projects: FC = () => {
  return (
    <section className="section space-y-8" id="projects">
      <div className="container space-y-6">
        <h2 className="text-center text-primary uppercase font-maximaNouvaBold text-2xl">
          OUR SERVICES
        </h2> 
        <div className="space-y-3">
          <h3 className="text-2xl md:text-4xl font-maximaNouvaBold font-bold">
             We Create Environments That Work
          </h3>
          <p>
         Partnering with [Your Company Name] means choosing a team dedicated to reliability, safety, and tailored facility solutions that support your operations and enhance your space.
          </p>
        </div>

      </div>
   
         <div
      className="container max-w-[80%] flex flex-col gap-4 md:hidden lg:flex lg:flex-row lg:max-w-full lg:gap-5">
          {
            info.map(({icon, text, title}) => (
              <div key={title} className="rounded-xl bg-white w-[30ch] h-[25vh] py-5 px-4 grid items-start shadow-2xl">
                <Image src={icon} alt={title} />
                <div> 
                  <span className=""> {title} </span>
                  <p>
                    {text}
                  </p>
                </div>
              </div>
            ))
          }
      </div>
    </section>
  )
};

export default Projects;
