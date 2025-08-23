import React from "react";
import { teamMembers } from "../data";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const TeamCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
  >
    <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
      <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-32 h-32 mx-auto rounded-full mb-4 object-cover shadow-lg border-2 border-cyan-400"
        />
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-cyan-500 dark:text-cyan-300">{member.role}</p>
      </div>
    </Tilt>
  </motion.div>
);

export default function TeamPage() {
  return (
    <>
      <SEO title="Our Team" description="Meet the team behind SRIJAN 2025." />
      <div className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Meet the Team</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
