import { fontHeader } from "@/utils/fonts";
import Image from "next/image";
import logo from "../../public/logo.ico"
import ObjectivesCard from "@/components/home/objectivesCard";
import kurumi from "../../public/Kurumi.jpeg"
export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <section className="flex flex-col justify-center gap-12 w-full  items-center p-4 h-screen relative" >
        <div className="bg-cover bg-no-repeat w-full h-screen  absolute inset-0 z-0 saturate-100 brightness-50" style={{ backgroundImage: `url(${kurumi.src})` }} >
        </div>
        <div className="w-full flex flex-col items-center gap-4 z-10">
          <Image src={logo} alt="logo" className="w-64 h-54" />
          <h1 className={`text-4xl md:text-5xl font-bold text-white
            ${fontHeader.className}`}>
            Pogi ako kasi web developer ako     </h1>
          <p className="text-xl  text-white/60">
            website goal only one don't define it here all.
          </p>

          <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
            <button className="p-3 cursor-pointer rounded-xl  bg-blue-600 text-white text-lg">
              About Us
            </button>
            <button className="p-3 cursor-pointer  rounded-xl bg-white  text-blue-600 text-lg ">
              More details
            </button>

          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4 z-10">

          <div className="bg-black w-full h-[200px] rounded-xl"></div>
          <div className="bg-black w-full h-[200px] rounded-xl"></div>
          <div className="bg-black w-full h-[200px] rounded-xl" ></div>

        </div>



      </section>
      <ObjectivesCard />
    </div>
  )
}

