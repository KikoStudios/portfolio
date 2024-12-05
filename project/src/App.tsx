import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ThemeToggle />
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;