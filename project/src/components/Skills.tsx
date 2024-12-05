import React from 'react';
import { Code2, Database, Layout, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const skills = {
  'Frontend Development': {
    icon: <Layout className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  'Backend Development': {
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Python', 'Express', 'FastAPI']
  },
  'Database': {
    icon: <Database className="w-6 h-6" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
  },
  'Languages': {
    icon: <Code2 className="w-6 h-6" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL']
  }
};

const translations = {
  en: {
    title: 'Skills & Expertise'
  },
  cz: {
    title: 'Dovednosti a odbornost'
  }
};

export default function Skills() {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        
        <div className="overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ 
              x: [0, -1920],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Object.entries(skills), ...Object.entries(skills)].map(([category, { icon, skills }], index) => (
              <div 
                key={index}
                className="min-w-[300px] p-6 bg-white dark:bg-[#0A0A0A] rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  {icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#FF3366]" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}