import Header from "./team/header";
import { COMMITTEES } from "@/data/live/team";

const Committees = () => {
  return (
    <div className="-mt-1 flex flex-col items-center justify-center gap-4 bg-cutie-blue-300 py-10 font-righteous text-white">
      <Header title={"Committees"} />
      <div className="mt-3 flex w-full flex-row flex-wrap justify-center gap-5 text-center sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        {Object.entries(COMMITTEES).map(([committee, members], index) => (
          <div className="flex flex-col" key={index}>
            <div className="mb-3 text-2xl font-semibold">{committee}</div>
            {members.map((member, index) => (
              <div key={index} className="text-lg">
                {member}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
