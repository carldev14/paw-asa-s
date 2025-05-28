import { fontHeader } from "@/utils/fonts";
import Image from "next/image";
import logo from "../../public/logo.ico"
import ObjectivesCard from "@/components/home/objectivesCard";
import bgImage from "../../public/IMG_2863.webp"
import firstDay from "../../public/IMG_1458.webp"
import secondDay from "../../public/IMG_2861.webp"
import thirdDay from "../../public/o.webp"
import AboutShelter from "@/components/home/aboutShelter";
import spcba from "../../public/Untitled-removebg-preview.png"
import nstp from "../../public/bx10800-TOTu0pzNHthr-removebg-preview.png"

export default function Home() {
  const ThreeDaysImage = [{
    image: firstDay,
    alt: "firstday"
  },
  {
    image: secondDay,
    alt: "secondday"

  }, {
    image: thirdDay,
    alt: "thirdday"

  }]

  const Logos = [{
    image: nstp,
    alt: "nstp"
  },
  {
    image: logo,
    alt: "paw-asa"

  }, {
    image: spcba,
    alt: "spcba"

  }]
  return (
    <div className="grid place-items-center h-auto bg-blue-600 gap-8">
      <section className="flex flex-col justify-center gap-12 w-full md:h-screen  items-center p-4 h-auto relative" >
        <div className="bg-cover bg-no-repeat w-full sm:h-auto md:h-[90vh]  absolute inset-0 z-0 saturate-100 brightness-50 rounded-b-xl" style={{ backgroundImage: `url(${bgImage.src})` }} >
        </div>
        <div className="w-full flex flex-col items-center gap-4 z-10">

          <div className="flex gap-4 w-4/6 justify-between">
            {
              Logos.map((logo) => (
                <Image src={logo.image} alt={logo.alt} className="w-64 h-54" priority />

              ))
            }
          </div>        <h1 className={`text-4xl md:text-5xl font-bold text-white
            ${fontHeader.className}`}>
            Blue - Prudence - Paw Asa     </h1>
          <p className="text-xl  text-white/80">
            We Blue - Prudence, share the shelter mission and efforts in caring for animals in need.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
            <a className="p-3 cursor-pointer rounded-xl  bg-blue-600 text-white text-lg text-center" href="https://www.facebook.com/sanpedrominianimelshelter" target="_blank">
              Facebook Page
            </a>
            <a className="p-3 cursor-pointer  rounded-xl bg-white  text-blue-600 text-lg text-center " href="https://maps.app.goo.gl/CtNbfe6F9B8aX6oY8" target="_blank">
              Location
            </a>

          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4 z-10 ">
          {ThreeDaysImage.map((image, index) => (
            <Image src={image.image} alt={image.alt} className="shadow-md h-[200px] rounded-xl bg-cover" key={index} priority ></Image >

          ))}

        </div>
      </section>
      <div className="flex flex-col gap-8 ">
        <AboutShelter />

        <ObjectivesCard />
      </div>
    </div>
  )
}

