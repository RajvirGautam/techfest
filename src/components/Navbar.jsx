import React from 'react';
import { Sun, Moon, Home, Calendar, Lightbulb, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  
  const linkClass = ({ isActive }) =>
    `transition-colors ${isActive ? 'text-primary-light' : 'hover:text-primary-light'}`;
  
  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary-light' : 'hover:text-primary-light'}`;

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full
          bg-white/20 dark:bg-dark-bg/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 
          shadow-lg rounded-b-2xl">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
              S
            </div>
            <div className="text-sm font-bold tracking-wider">SRIJAN 2025</div>
          </NavLink>

          {/* Nav Links */}
          <nav className="flex gap-6 items-center text-sm font-medium">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/events" className={linkClass}>Events</NavLink>
            <NavLink to="/ideathon" className={linkClass}>Ideathon</NavLink>
            <NavLink to="/team" className={linkClass}>Team</NavLink>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-white/20 dark:bg-gray-800/40 
                         border border-white/30 dark:border-gray-600/30 
                         backdrop-blur-md hover:scale-105 transition-transform"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 
        bg-white/20 dark:bg-dark-bg/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30
        shadow-xl rounded-2xl px-6 py-2 z-50">
        <div className="flex justify-around items-center gap-6 text-xs">
          <NavLink to="/" className={mobileLinkClass}><Home size={20}/>Home</NavLink>
          <NavLink to="/events" className={mobileLinkClass}><Calendar size={20}/>Events</NavLink>
          <NavLink to="/ideathon" className={mobileLinkClass}><Lightbulb size={20}/>Ideathon</NavLink>
          <NavLink to="/team" className={mobileLinkClass}><Users size={20}/>Team</NavLink>
        </div>
      </nav>
    </>
  );
}