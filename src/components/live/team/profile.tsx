import Image, { StaticImageData } from "next/image";
import Border from "@/public/assets/window.svg";
import { memo } from "react";

const Profile = memo(({ name, team, image }: { name: string; team: string; image: string | StaticImageData }) => {
  return (
    <div className="flex w-fit flex-col items-center justify-center text-center font-righteous text-white">
      <div className="relative mb-6 flex w-10/12 items-center justify-center">
        <Image src={Border} alt="window" loading="lazy" />
        <Image
          src={image}
          alt={`${name}'s Image`}
          className="absolute inset-0 left-[17%] top-[16%] h-[68%] w-[68%] rounded-full object-cover"
          loading="lazy"
        />
      </div>
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-md font-medium">{team}</p>
    </div>
  );
});

Profile.displayName = "Profile";

export default Profile;
