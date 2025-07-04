import React, { useState } from 'react';
import {FaCode,FaCogs,FaLaptopCode,FaDatabase,FaLock,FaServer,FaGitAlt} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  {
    icon: <FaCode size={30} />,
    title: 'Languages',
    subtitle: 'Programming & Markup',
    image: 'c,cpp,html,css,js',
  },
  {
    icon: <FaServer size={30} />,
    title: 'Frameworks & Tools',
    subtitle: 'Frontend & Backend',
    image: 'react,nodejs,express,bootstrap,tailwind',
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: 'Dev Platforms',
    subtitle: 'Build & Deploy Tools',
    image: 'vite,vercel,figma',
  },
  {
    icon: <FaDatabase size={30} />,
    title: 'Databases',
    subtitle: 'Relational & NoSQL',
    image: 'mysql,mongodb',
  },
  {
    icon: <FaCogs size={30} />,
    title: 'IDEs',
    subtitle: 'Development Environments',
    image: 'vscode,webstorm',
  },
  {
    icon: <FaLock size={30} />,
    title: 'Cybersecurity',
    subtitle: 'Security Tools',
    image: 'kali,nmap,metasploit',
  },
  {
    icon: <FaGitAlt size={30} />,
    title: 'Version Control',
    subtitle: 'Git & Hosting',
    image: 'git,github,firebase',
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto mt-20 px-6 md:px-14 lg:px-0">
      {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12">
                  
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills</h2>
              <p className="mt-3 text-gray-600 text-lg dark:text-gray-300">My Technical Expertise & Toolset</p>
            </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl transition-all duration-300 ${
                isOpen ? 'bg-white' : 'bg-gray-50 hover:shadow-md'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`panel-${index}`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="text-green-600">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{skill.title}</h3>
                    <p className="text-sm text-green-600">{skill.subtitle}</p>
                  </div>
                </div>
                <div className="text-green-600">
                  {isOpen ? <FiChevronUp size={22} /> : <FiChevronDown size={22} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`panel-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden px-5 pb-4 bg-white"
            >
              <div className="grid grid-cols-4 gap-3 justify-items-center pt-3">
                {skill.image.split(',').map((icon, i) => (
                  <motion.img
                    key={i}
                    src={`https://skillicons.dev/icons?i=${icon.trim()}`}
                    alt={icon}
                    className="h-12 w-12"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
