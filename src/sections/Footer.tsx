import { FC } from "react";
import Image from "next/image";
import { dnaLogo } from "@/assets/images";
import { facebook, linkedin, instagram } from "@/assets/icons";

const Footer: FC = () => {
  return (<footer className="grid items-end text-white" id="contacts">
    <div className="bg-[#101E38] pt-10 pb-5 space-y-4">
      <div className="container mx-auto space-y-2">
        <span className="font-sfProDisplayBold">
          Professional Facilities Management & Cleaning Services.
        </span>
        <div className="w-[4rem] bg-[#E1F6FF] rounded-xl">
        <Image className="object-fill" src={dnaLogo} alt="dna logo"  />
        </div>
      </div>
      <div className="container mx-auto">
        <span className="font-sfProDisplayBold">
          Contact us   
        </span>
        <ul>
          <li>
          Phone: +233-809-942
          </li>
          <li>
            Email: info@management.com
          </li>
          <li>
            Office Address: 123 Facility Way, Victoria Island, Lagos, Nigeria
          </li>
        </ul>
      </div>
      <hr className="text-[#fff] w-full my-6 "></hr>
      <div className="container mx-auto space-y-4">
        <div className="flex gap-4">
          <span className="bg-[#25334D] p-2 rounded-full">
            <Image src={facebook} alt="facebook icon" />
          </span>
           <span className="bg-[#25334D] p-2 rounded-full">
            <Image src={linkedin} alt="facebook icon" />
          </span>
           <span className="bg-[#25334D] p-2 rounded-full">
            <Image src={instagram} alt="facebook icon" />
          </span>
        </div>
        <div className="">
        All Rights Reserved
        </div>
      </div>
    </div>
  </footer>);
};

export default Footer;
