import Title from "./title";
import orangeGalaxy from "@/public/assets/orangeGalaxy.svg";
import coolerMaster from "@/public/assets/coolerMaster.svg";
import cocalc from "@/public/assets/cocalc.webp";
import ellipse from "@/public/assets/whiteEllipse.svg";
import blueflag from "@/public/assets/blueflag.svg";
import swirl from "@/public/assets/swirl.svg";
import rightswirl from "@/public/assets/rightswirl.svg";
import Image from "next/image";
import rLogo from "@/public/assets/createR.webp";
import desmosLogo from "@/public/assets/desmosLogo.webp";
import wolfLogo from "@/public/assets/wolfram.webp";
import star from "@/public/assets/star.svg";
import whiteStar from "@/public/assets/betterWhiteStar.svg";

const Sponsors = () => {
  return (
    <div className="z-30 flex w-full flex-col items-center bg-cutie-blue-300">
      <div className="flex flex-col items-center justify-center">
        <Title text={"Sponsors"} subtext={"Thank you so much!"} />
      </div>
      <div className="my-7 grid w-11/12 scale-90 grid-cols-1 gap-20 md:scale-100 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Image
            src={swirl}
            alt="Cover"
            className="rotate-220 absolute -left-[130px] hidden h-[1000px] w-[1500px] md:block"
          />
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={star}
            alt="star-icon"
            className="z-15 absolute left-[250px] top-[85px] h-[80px] w-[90px] object-fill"
          />
          <Image
            src={coolerMaster}
            alt="coolMaster"
            className="z-15 absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="relative">
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={cocalc}
            alt="cocalc"
            className="z-15 absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white object-contain"
          />
          <Image
            src={star}
            alt="star-icon"
            className="z-15 absolute inset-0 left-[250px] top-[85px] h-[80px] w-[90px] object-fill"
          />
        </div>
        <div className="relative">
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={star}
            alt="star-icon"
            className="z-15 absolute inset-0 left-[250px] top-[85px] h-[80px] w-[90px] object-fill"
          />
          <Image
            src={rLogo}
            alt="rLab"
            className="z-15 absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white object-contain"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center lg:flex-row lg:gap-[130px]">
        <Image
          src={rightswirl}
          alt="Cover"
          className="rotate-220 absolute right-0 z-0 hidden w-[30%] overflow-auto md:block"
        />
        <div className="relative mb-10 w-[270px]">
          <Image
            src={blueflag}
            alt="flag"
            className="z-20 -mb-[80px] ml-[190px]"
          />
          <div className="relative h-[250px] w-[250px]">
            <Image src={ellipse} alt="Cover" className="w-full" />
            <Image
              src={desmosLogo}
              alt="desmos"
              className="z-1 absolute left-1/2 top-1/2 w-[190px] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
          <Image
            src={whiteStar}
            alt="flag"
            className="z-15 absolute inset-0 left-[40px] top-[90px] h-[70px] w-[50px]"
          />
        </div>
        <div className="relative mb-10 w-[270px]">
          <Image
            src={blueflag}
            alt="flag"
            className="z-20 -mb-[80px] ml-[190px]"
          />
          <div className="relative h-[250px] w-[250px]">
            <Image src={ellipse} alt="Cover" className="w-full" />
            <Image
              src={wolfLogo}
              alt="wolfLogo"
              className="z-1 absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
          <Image
            src={whiteStar}
            alt="flag"
            className="z-15 absolute inset-0 left-[40px] top-[90px] h-[70px] w-[50px]"
          />
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
