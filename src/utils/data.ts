import icon1 from '../../public/images/icon.svg'
import icon2 from '../../public/images/icon2.svg'
import icon3 from '../../public/images/icon3.svg'
import hackathon from '../../public/images/hack.svg'
export type Member = {
  name: string
  points: number
  hackathon: string,
  userName?: string,
  icon: string
}

export const communityData: Member[] = [
  { name: "John Doe", points: 170, hackathon: "Hack1Futo ", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Jane Smith", points: 190, hackathon: "Hack2Futo ", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Tom Brown", points: 280, hackathon: "Hack3Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Emma White", points: 70, hackathon: "Hack4Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Luke Green", points: 60, hackathon: "Hack5Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Lukas Green", points: 60, hackathon: "Hack6Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Alice Gray", points: 150, hackathon: "Hack7Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Bob Black", points: 140, hackathon: "Hack8Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Charlie Blue", points: 130, hackathon: "Hack9Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "David Red", points: 120, hackathon: "Hack10Futo", userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Michael Jordans", points: 102, hackathon: "Hack10Futo", userName: '@oliviacoledesigns', icon: icon1 },
]

export const builderData: Member[] = [

  { name: "Dennis Pink", hackathon: "200", points: 10, userName: '@oliviacoledesigns', icon: icon1 },
  { name: "David White", hackathon: "200", points: 20, userName: '@oliviacoledesigns', icon: icon1 },
  { name: "serha blue", hackathon: "200", points: 50, userName: '@oliviacoledesigns', icon: icon2 },
  { name: "chaelwa Green", hackathon: "200", points: 40, userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Alice Gray", hackathon: "200", points: 30, userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Bob Black", hackathon: "200", points: 12, userName: '@oliviacoledesigns', icon: icon1 },
  { name: "Charlie Blue", hackathon: "200", points: 20, userName: '@oliviacoledesigns', icon: icon1 },
  { name: "David Red", hackathon: "200", points: 39, userName: '@oliviacoledesigns', icon: icon3 },
]

export type Hackathon = {
  daysRemain: string;
  backgroundImage: string;
  hackathonName: string;
  status: string;
  reward: string;
  participants: number;
  stacks: string[];
  company: string;
  location: string;
  duration: "ongoing" | "upcoming" | "closed";
};

export const hackathonData: Hackathon[] = [
  {
    daysRemain: "4 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "Hack4Futo ",
    status: "private",
    reward: "$2,000",
    participants: 100,
    stacks: ["blockchain", "bitcoin", "react", "vue"],
    company: "Microsoft",
    location: "Accra, Ghana",
    duration: "ongoing",
  },
  {
    daysRemain: "10 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "Build4Africa ",
    status: "public",
    reward: "$5000",
    participants: 200,
    stacks: ["flutter", "firebase", "tailwind", "next.js"],
    company: "Google",
    location: "Lagos, Nigeria",
    duration: "upcoming",
  },
  {
    daysRemain: "3 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "TechPioneers ",
    status: "private",
    reward: "$3500",
    participants: 150,
    stacks: ["python", "django", "tensorflow", "node.js"],
    company: "Amazon",
    location: "Cape Town, South Africa",
    duration: "ongoing",
  },
  {
    daysRemain: "12 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "InnovateX Challenge",
    status: "public",
    reward: "$7000",
    participants: 300,
    stacks: ["angular", "typescript", "java", "postgresql"],
    company: "Apple",
    location: "Nairobi, Kenya",
    duration: "upcoming",
  },
  {
    daysRemain: "6 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "CodeCrushers ",
    status: "private",
    reward: "$4000",
    participants: 180,
    stacks: ["react", "redux", "docker", "graphql"],
    company: "Facebook",
    location: "Johannesburg, South Africa",
    duration: "upcoming",
  },
  {
    daysRemain: "2 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "DevSprint ",
    status: "public",
    reward: "$2500",
    participants: 120,
    stacks: ["java", "kotlin", "android", "firebase"],
    company: "Samsung",
    location: "Accra, Ghana",
    duration: "ongoing",
  },
  {
    daysRemain: "5 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "AI Vision ",
    status: "private",
    reward: "$6000",
    participants: 250,
    stacks: ["ai", "machine learning", "python", "openCV"],
    company: "Tesla",
    location: "Lagos, Nigeria",
    duration: "upcoming",
  },
  {
    daysRemain: "15 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "HackTheFuture ",
    status: "public",
    reward: "$8000",
    participants: 350,
    stacks: ["blockchain", "python", "solidity", "graphql"],
    company: "IBM",
    location: "Nairobi, Kenya",
    duration: "upcoming",
  },
  {
    daysRemain: "8 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "Frontend Innovation ",
    status: "private",
    reward: "$3000",
    participants: 130,
    stacks: ["html", "css", "javascript", "react"],
    company: "Adobe",
    location: "Kigali, Rwanda",
    duration: "ongoing",
  },
  {
    daysRemain: "1 day until registration ends",
    backgroundImage: hackathon,
    hackathonName: "TechNova ",
    status: "public",
    reward: "$10000",
    participants: 500,
    stacks: ["node.js", "express", "mongodb", "vue.js"],
    company: "Slack",
    location: "Dakar, Senegal",
    duration: "upcoming",
  },
  {
    daysRemain: "9 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "CloudDev ",
    status: "private",
    reward: "$4500",
    participants: 210,
    stacks: ["aws", "azure", "docker", "terraform"],
    company: "Oracle",
    location: "Lagos, Nigeria",
    duration: "upcoming",
  },
  {
    daysRemain: "7 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "NextGen ",
    status: "public",
    reward: "$3500",
    participants: 170,
    stacks: ["swift", "ios", "xcode", "firebase"],
    company: "Spotify",
    location: "Accra, Ghana",
    duration: "upcoming",
  },
  {
    daysRemain: "13 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "CyberDefend ",
    status: "private",
    reward: "$5500",
    participants: 220,
    stacks: ["cybersecurity", "penetration testing", "kali linux", "python"],
    company: "Cisco",
    location: "Johannesburg, South Africa",
    duration: "upcoming",
  },
  {
    daysRemain: "14 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "Web Innovators ",
    status: "public",
    reward: "$4000",
    participants: 190,
    stacks: ["html", "css", "javascript", "vue"],
    company: "LinkedIn",
    location: "Nairobi, Kenya",
    duration: "upcoming",
  },
  {
    daysRemain: "11 days until registration ends",
    backgroundImage: hackathon,
    hackathonName: "StartUp Challenge ",
    status: "private",
    reward: "$5000",
    participants: 160,
    stacks: ["business", "marketing", "strategy", "python"],
    company: "Stripe",
    location: "Kigali, Rwanda",
    duration: "ongoing",
  }
];
