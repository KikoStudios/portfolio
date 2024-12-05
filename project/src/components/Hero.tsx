import React from 'react';
import { Github, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const translations = {
  en: {
    greeting: "Hi, I'm",
    description: "A passionate full-stack developer crafting beautiful and functional digital experiences",
    cta: "About",
  },
  cz: {
    greeting: "Ahoj, jsem",
    description: "Vášnivý full-stack vývojář vytvářející krásné a funkční digitální zážitky",
    cta: "O mně",
  }
};

export default function Hero() {
  const { language } = useTheme();
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            {t.greeting} <span className="gradient-text">Kryštof Hrdý</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="#contact" 
              className="flex items-center gap-2 bg-[#FF3366] hover:bg-[#FF4E7A] px-6 py-3 rounded-lg font-medium transition-all"
            >
              {t.cta} <ArrowRight size={20} />
            </a>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KikoStudios"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://gitbook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <BookOpen size={20} />
                <span>GitBook</span>
              </a>
              <a 
                href="mailto:hello@example.com" 
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}