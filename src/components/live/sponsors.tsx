import {
  CoolerMaster,
  SponsorFlag,
  SponsorSmall,
  RingRight,
  RingLeft,
} from "@/public/assets/sponsors";
import Title from "./title";

import Image from "next/image";
const Sponsors = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-cutie-blue-300 px-[50px] pb-[191px] sm:px-[107px]">
      <Title text={"Sponsors"} subtext={"Thank you so much!"} />
      <div className="absolute left-0 top-0 z-0">
        <Image src={RingLeft} alt="Left Ring" className="h-full w-full" />
      </div>

      <div className="absolute right-0 top-[1144px] z-0 sm:top-[1424px] lg:top-[804px] 2xl:top-[284px]">
        <Image src={RingRight} alt="Right Ring" className="h-full w-full" />
      </div>

      <div className="z-10 mt-[156px] flex w-full flex-wrap justify-center gap-x-[31px] gap-y-[20px]">
        <div className="w-[417px]">
          <Image
            src={CoolerMaster}
            alt="Cooler Master"
            className="h-auto max-h-[466px] w-full object-contain"
          />
        </div>
        <div className="w-[417px]">
          <Image
            src={CoolerMaster}
            alt="Cooler Master"
            className="h-auto max-h-[466px] w-full object-contain"
          />
        </div>
        <div className="w-[417px]">
          <Image
            src={CoolerMaster}
            alt="Cooler Master"
            className="h-auto max-h-[466px] w-full object-contain"
          />
        </div>
      </div>

      <div className="z-10 mt-[77px] flex w-full flex-wrap justify-center gap-x-[173px] gap-y-[20px]">
        <div className="w-[306px]">
          <Image
            src={SponsorFlag}
            alt="Small Sponsor"
            className="h-auto max-h-[347px] w-full object-contain"
          />
        </div>
        <div className="w-[306px]">
          <Image
            src={SponsorFlag}
            alt="Small Sponsor"
            className="h-auto max-h-[347px] w-full object-contain"
          />
        </div>
      </div>

      <div className="z-10 mt-[23px] flex w-full flex-wrap justify-center gap-x-[173px] gap-y-[20px]">
        <div className="w-[190px]">
          <Image
            src={SponsorSmall}
            alt="XS Sponsor"
            className="h-auto max-h-[255px] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
