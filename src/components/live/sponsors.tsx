import Title from "./title";
import orangeGalaxy from "@/public/assets/orangeGalaxy.svg";
import coolerMaster from "@/public/assets/coolerMaster.svg";
import cocalc from "@/public/assets/cocalc.svg";
import ellipse from "@/public/assets/whiteEllipse.svg";
import blueflag from "@/public/assets/blueflag.svg";
import swirl from "@/public/assets/swirl.svg";
import rightswirl from "@/public/assets/rightswirl.svg";
import Image from "next/image";
import rLogo from "@/public/assets/createR.svg";
import desmosLogo from "@/public/assets/desmosLogo.svg";
import quokkaLogo from "@/public/assets/quokka.svg";
import wolfLogo from "@/public/assets/wolfram.svg";
import star from "@/public/assets/star.svg";
import cutieLogo from "@/public/assets/cutiehackLOGO.svg";
import whiteStar from "@/public/assets/betterWhiteStar.svg";
import yellowStar from "@/public/assets/betterYellowStar.svg";

const Sponsors = () => {
  return (
    <div className="px-50 bg-cutie-blue-300 sm:px-[107px]">
      <div className="flex flex-col items-center justify-center">
        <Title text={"Sponsors"} subtext={"Thank you so much!"} />
      </div>
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative">
          <Image
            src={swirl}
            alt="Cover"
            className="top[200px] rotate-220 absolute -left-[130px] h-[1000px] w-[1500px]"
          />
          <Image
            src={orangeGalaxy}
            alt="Sponsor"
            className="h-full w-full object-fill"
          />
          <Image
            src={ellipse}
            alt="Cover"
            className="z-2 absolute inset-0 left-[90px] top-[110px] h-[251px] w-[245px] object-fill"
          />
          <Image
            src={star}
            alt="star-icon"
            className="z-15 absolute inset-0 left-[250px] top-[85px] h-[80px] w-[90px] object-fill"
          />
          <Image
            src={coolerMaster}
            alt="coolMaster"
            className="z-15 absolute inset-0 left-[90px] top-[100px] h-[251px] w-[245px] object-fill"
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
            className="z-2 absolute inset-0 left-[90px] top-[110px] h-[251px] w-[245px] object-fill"
          />
          <Image
            src={star}
            alt="star-icon"
            className="z-15 absolute inset-0 left-[250px] top-[85px] h-[80px] w-[90px] object-fill"
          />
          <Image
            src={cocalc}
            alt="cocalc"
            className="z-15 absolute inset-0 left-[100px] top-[100px] h-[251px] w-[220px] object-fill"
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
            className="z-2 absolute inset-0 left-[90px] top-[110px] h-[251px] w-[245px] object-fill"
          />
          <Image
            src={star}
            alt="star-icon"
            className="z-15 absolute inset-0 left-[250px] top-[85px] h-[80px] w-[90px] object-fill"
          />
          <Image
            src={rLogo}
            alt="rLab"
            className="z-15 absolute inset-0 left-[110px] top-[100px] h-[240px] w-[190px] object-fill"
          />
        </div>
      </div>

      <div className="">
        <div className="lg:px[900px] relative grid grid-cols-1 lg:grid-cols-2">
          <Image
            src={rightswirl}
            alt="Cover"
            className="top[200px] rotate-220 absolute z-0 h-[800px] w-[850px] lg:ml-[720px]"
          />
          <div className="relative mb-10 ml-[70px] w-[270px] lg:ml-[270px]">
            <Image
              src={blueflag}
              alt="flag"
              className="inset-0 z-20 -mb-[80px] ml-[190px]"
            />
            <Image
              src={cutieLogo}
              alt="flag"
              className="z-15 absolute inset-0 left-[192px] h-[100px] w-[100px]"
            />
            <Image
              src={whiteStar}
              alt="flag"
              className="z-15 absolute inset-0 left-[40px] top-[90px] h-[70px] w-[50px]"
            />
            <Image
              src={ellipse}
              alt="Cover"
              className="-mt-2 h-[300px] w-[300px] object-fill"
            />
            <Image
              src={desmosLogo}
              alt="desmos"
              className="z-1 absolute left-[50px] top-[130px] h-[240px] w-[190px] object-fill lg:left-[50px]"
            />
          </div>
          <div className="relative mb-10 ml-[70px] w-[270px]">
            <Image
              src={blueflag}
              alt="flag"
              className="inset-0 z-20 -mb-[80px] ml-[190px]"
            />
            <Image
              src={whiteStar}
              alt="flag"
              className="z-15 absolute inset-0 left-[40px] top-[90px] h-[70px] w-[50px]"
            />
            <Image
              src={ellipse}
              alt="Cover"
              className="-mt-2 h-[300px] w-[300px] object-fill"
            />
            <Image
              src={cutieLogo}
              alt="flag"
              className="z-1 absolute inset-0 left-[192px] h-[100px] w-[100px]"
            />
            <Image
              src={quokkaLogo}
              alt="quokka"
              className="z-1 absolute left-[50px] top-[130px] h-[240px] w-[190px] object-fill md:left-[50px] lg:left-[50px]"
            />
          </div>
          <div className="ml-[120px] mt-3 w-[200px] lg:ml-[595px]">
            <Image
              src={yellowStar}
              alt="star"
              className="z-15 absolute bottom-[200px] ml-[130px] w-[50px] scale-125 object-fill"
            />
            <Image
              src={wolfLogo}
              alt="wolf"
              className="z-15 absolute bottom-[110px] ml-[50px] w-[100px] scale-125 object-fill"
            />
            <Image
              src={ellipse}
              alt="Cover"
              className="-mt-2 h-[300px] w-[300px] object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
