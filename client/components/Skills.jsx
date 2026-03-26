import React from 'react';
import { Code, Network, BookOpen, Database } from 'lucide-react'; // Optional: npm install lucide-react

const SkillCard = ({ title, icon: Icon, skills, color }) => (
  <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500 transition-all duration-300">
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-slate-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Software Development",
      icon: Code,
      color: "bg-blue-600",
      skills: ["MERN Stack (MongoDB, Express, React, Node.js)", "Tailwind CSS", "Object-Oriented Programming (C++)", "JavaScript (ES6+)"]
    },
    {
      title: "Network Infrastructure",
      icon: Network,
      color: "bg-emerald-600",
      skills: ["Cisco Packet Tracer Simulation", "VLAN & Routing Protocols (OSPF)", "Data Communication", "Network Security & Configuration"]
    },
    {
      title: "ICT & Analysis",
      icon: Database,
      color: "bg-purple-600",
      skills: ["Data Science & Analytics", "Information Systems", "Monitoring & Evaluation (M&E)", "Database Management"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;