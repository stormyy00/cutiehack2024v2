type config = {
  name: string;
  short_name: string;
  email: string;
  description: string;
  length: number;
  date: Date;
  end: Date;
  packet: string;
  devpost: string;
  domain: string;
  instagram: string;
  linkedin: string;
  discord: string;
  heart: string;
};

const data: config = {
  name: "CutieHack",
  short_name: "CutieHack",
  email: "citrushack@gmail.com",
  description:
    "Cutie Hack is a 12-hour, beginner-oriented hackathon hosted by students at University of California, Riverside where hackers are challenged to create a cool project within the time frame to demo in order to win awesome prizes and participate in workshops, fun games, and networking.",
  length: 24,
  date: new Date("2024-11-16T13:20:00"),
  end: new Date("2024-04-11T13:20:00"),
  packet: "",
  devpost: "https://devpost.com/",
  domain: "https://www.placeholder.com",
  instagram: "https://www.instagram.com",
  linkedin: "https://www.linkedin.com",
  discord: "https://www.discord.com",
  heart: "🧡",
};

export default data;
