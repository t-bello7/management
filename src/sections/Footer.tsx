import { Button } from "@/components";
import { FC } from "react";
import Image from "next/image";
import { dnaLogo } from "@/assets/images";

const Footer: FC = () => {
  return (<footer className="grid items-end h-[63vh] text-white" id="contacts">
    <div className="bg-[#1B1B1B] h-[50vh]">
    <div className="bg-primary h-[40vh] container max-w-[90%] left-[50%] translate-x-[-50%] -top-[20vh] absolute p-4 space-y-2">
      <h3 className="font-maximaNouvaBold text-3xl">
        We cannot do this alone, Join us Today.
      </h3>
      <p>
        Whether you are an individual, organization, or government entity, your support can help us save lives and transform healthcare in Ghana.
        Together, we can ensure that no one is left behind in the fight for breath and life.
      </p>
      <Button variant="secondary">
        Join Us
      </Button>
    </div>

    <div>
      <div>
      <span>
        Professional Facilities Management & Cleaning Services.
      </span>
      <Image 
        src={dnaLogo}
        alt="dna logo"
      />
      </div>
      <div>
        <span>
          contact us   
        </span>
        <ul>
        </ul>
      </div>
    </div>
    </div>
  </footer>);
};

export default Footer;
