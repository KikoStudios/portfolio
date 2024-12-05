import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'Astro Pi Mission Space Lab',
    description: 'Pošítaní rychlosti ISS pomocí kamery a metadat',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tech: ['Python 3.11', 'OpenCV', 'AstroPi', 'Tailwind'],
    github: 'https://github.com/KikoStudios/Astro_Pi_MAX8',
    projectUrl: '/project1'
  },
  {
    title: 'Project Two',
    description: 'AI-powered content management system',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    tech: ['Python', 'TensorFlow', 'React', 'AWS'],
    github: 'https://github.com',
    projectUrl: '/project2'
  },
  {
    title: 'Project Three',
    description: 'Real-time collaboration tool for remote teams',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    tech: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    projectUrl: '/project3'
  }
];

const translations = {
  en: {
    title: 'Featured Projects',
    viewCode: 'View Code',
    more: 'More'
  },
  cz: {
    title: 'Projekty',
    viewCode: 'Zobrazit kód',
    more: 'Více'
  }
};

export default function Projects() {
  const { language } = useTheme();
  const t = translations[language];

  return (
      <section id="projects" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">{t.title}</h2>

          <motion.div
              className="flex gap-8"
              animate={{ x: [-1000, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
          >
            {[...projects, ...projects].map((project, index) => (
                <div
                    key={index}
                    className="min-w-[350px] card bg-white dark:bg-[#1A1A1A] group"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-gray-200"
                        >
                    {tech}
                  </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-[#FF3366]"
                    >
                      <Github size={16} /> {t.viewCode}
                    </a>
                    <a
                        href={project.projectUrl}
                        className="flex items-center gap-2 text-sm hover:text-[#FF3366]"
                    >
                      <ExternalLink size={16} /> {t.more}
                    </a>
                  </div>
                </div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
