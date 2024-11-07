import tearblue from "@/public/assets/tearblue.svg";
import tearpink from "@/public/assets/tearpink.svg";
import tearpurple from "@/public/assets/tearpurple.svg";

export const TRACKS = [
  {
    title: "1st Overall",
    description:
      "Awarded to the most impressive hack overall, beginners and veterans alike.",
    image: tearpink,
    className: "-rotate-12  top-0 left-20",
    text: "top-[40%] left-[15%]",
  },
  {
    title: "2nd Overall",
    description:
      "Awarded to the most impressive runner-up hack, beginners and veterans alike.",
    image: tearpink,
    className: "rotate-12 md:absolute top-[22%]",
    text: "top-[57%] left-[13%]",
  },
  {
    title: "3rd Overall",
    description:
      "Awarded to the most impressive second runner-up hack, beginners and veterans alike.",
    image: tearpink,
    className: "rotate-[24deg] md:absolute top-0 ",
    text: "top-[33%] left-[13%] ",
  },
  {
    title: "Best Hardware",
    description:
      "These projects involve the best incorporation of hardware that meshes well with software.",
    image: tearpurple,
    className: "-rotate-6",
    text: "top-[40%] left-[15%]",
  },
  {
    title: "Best UI/UX",
    description:
      "These projects must have a clean, easy-to-use interface. Design is an important aspect here.",
    image: tearpurple,
    className: "-rotate-[24deg] md:absolute top-[15%]",
    text: "top-[55%] left-[17%]",
  },
  {
    title: "Best Beginner",
    description:
      "For your hack to qualify as a Beginner Hack, Cutie Hack must be the first hackathon a majority of your team has attended.",
    image: tearpurple,
    className: "rotate-0",
    text: "top-[36%] left-[17%]",
  },
  {
    title: "Most Sustainable",
    description:
      "These projects must focus on promoting environmental sustainability and addressing ecological challenges.",
    image: tearblue,
    className: "-rotate-12",
    text: "top-[30%] left-[15%] w-3/4 -rotate-[20deg]",
  },
  {
    title: "Best Social Impact",
    description:
      "These projects must focus on improving the world by addressing social issues and promoting positive change.",
    image: tearblue,
    className: "rotate-12 md:absolute top-[15%]",
    text: "top-[46%] left-[16%] w-3/4",
  },
  {
    title: "Most on Theme",
    description: "These projects journeyed furthest beyond the stars.",
    image: tearblue,
    className: "rotate-[24deg]",
    text: "top-[40%] left-[15%] w-4/5",
  },
];
