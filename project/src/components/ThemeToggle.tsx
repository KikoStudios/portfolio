import React from 'react';
import { Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, language, toggleTheme, toggleLanguage } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <button
        onClick={toggleLanguage}
        className="px-4 py-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:opacity-90 transition-all flex items-center gap-2 min-w-[100px] justify-center"
        aria-label="Toggle Language"
      >
        <Languages size={20} />
        <span>{language.toUpperCase()}</span>
      </button>
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:opacity-90 transition-all"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}