import Profile from "./profile";
import Header from "./header";
import { DIRECTORS, TEAMS } from "@/data/live/team";

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-cutie-blue-300 to-cutie-blue-200 py-10 font-righteous">
      <div className="mt-5 text-3xl font-semibold text-cutie-yellow md:text-5xl">
        Meet the Team
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-10 text-white">
        <Header title={"Directors"} />
        <div className="mx-5 flex w-full flex-wrap justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
          {DIRECTORS.map((director, index) => (
            <div key={index} className="w-2/5 md:w-fit">
              <Profile
                name={director.name}
                team="Director"
                image={director.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-10 text-white">
        <Header title={"Leads"} />
        <div className="mt-3 grid w-11/12 grid-cols-2 gap-x-2 gap-y-10 text-center sm:gap-x-4 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-16">
          {TEAMS.map((member, index) => (
            <div key={index} className="mx-1 w-full p-1">
              <Profile
                name={member.name}
                team={member.team}
                image={member.image}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
