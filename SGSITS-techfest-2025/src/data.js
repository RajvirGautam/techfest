// src/data.js

export const translations = {
  en: {
    title: "SRIJAN 2025",
    subtitle: "SGSITS Indore's Annual Tech Extravaganza",
    heroDesc: "Dive into a universe of innovation, competition, and learning. Join thousands of creators, problem-solvers, and tech enthusiasts.",
    home: "Home",
    about: "About",
    events: "Events",
    ideathon: "Ideathon",
    exploreEvents: "Explore Events",
    about_srijan: "Srijan is more than a techfest; it's a celebration of human ingenuity. A platform where theory meets practice, ideas become reality, and the future is built, one line of code at a time.",
  },
  // Hindi translations
};

export const departmentalEvents = [
  {
    name: "CodeStorm",
    department: "Computer Engineering",
    description: "A competitive programming contest to challenge the brightest minds.",
    image: "http://googleusercontent.com/images.google.com/7", // Placeholder Image URL
    schedule: [
      { time: "10:00 AM", topic: "Round 1: Speed Coding Challenge" },
      { time: "01:00 PM", topic: "Round 2: Algorithmic Problem Solving" },
    ],
    registrationLink: "http://googleusercontent.com/forms.google.com/8" // Placeholder Google Form
  },
  {
    name: "Circuitrix",
    department: "Electronics & Telecomm.",
    description: "Design and build complex circuits against the clock.",
    image: "http://googleusercontent.com/images.google.com/9",
    schedule: [
      { time: "11:00 AM", topic: "Component Hunt & Briefing" },
      { time: "12:00 PM", topic: "Circuit Simulation Round" },
    ],
    registrationLink: "http://googleusercontent.com/forms.google.com/10"
  },
  // We need 3 items for a full row
  {
    name: "Mech-Mayhem",
    department: "Mechanical Engineering",
    description: "Build and test your mechanical contraptions in a series of challenges.",
    image: "http://googleusercontent.com/images.google.com/11",
    schedule: [
      { time: "10:30 AM", topic: "Design Submission" },
      { time: "01:30 PM", topic: "Endurance & Weight Test" },
    ],
    registrationLink: "http://googleusercontent.com/forms.google.com/12"
  },
];

export const ideathonStatements = [
  {
    title: "AI for Sustainable Agriculture",
    domain: "HealthTech / GreenTech",
    description: "Develop an AI-powered solution to help farmers optimize crop yield, reduce water usage, and detect diseases early. The solution can be a mobile app, a sensor-based system, or a data analytics platform."
  },
  {
    title: "Blockchain for Transparent Supply Chains",
    domain: "FinTech / Logistics",
    description: "Create a decentralized application (dApp) that tracks products from source to consumer, ensuring authenticity and preventing counterfeiting in industries like pharmaceuticals or luxury goods."
  },
  // Add more problem statements
];

export const ideathonRegistrationLink = "http://googleusercontent.com/forms.google.com/13";

export const teamMembers = [
  { name: "Aarav Sharma", role: "Convenor", avatar: "https://i.pravatar.cc/150?u=a" },
  { name: "Priya Singh", role: "Co-Convenor", avatar: "https://i.pravatar.cc/150?u=b" },
  { name: "Rohan Gupta", role: "Tech Head", avatar: "https://i.pravatar.cc/150?u=c" },
  { name: "Sneha Verma", role: "PR Head", avatar: "https://i.pravatar.cc/150?u=d" },
  { name: "Vikram Kumar", role: "Events Head", avatar: "https://i.pravatar.cc/150?u=e" },
  // Add more members
];

export const sponsors = [
    { name: "Sponsor 1", logo: "http://googleusercontent.com/images.google.com/14", link: "#" },
    { name: "Sponsor 2", logo: "http://googleusercontent.com/images.google.com/15", link: "#" },
    { name: "Sponsor 3", logo: "http://googleusercontent.com/images.google.com/16", link: "#" },
    { name: "Sponsor 4", logo: "http://googleusercontent.com/images.google.com/17", link: "#" },
];