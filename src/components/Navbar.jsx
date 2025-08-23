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
      <header className="hidden md:flex bg-white/70 dark:bg-dark-bg/70 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
          
          {/* CHANGE: Replaced img tag with a styled text logo for SRIJAN */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <div className="text-sm font-bold tracking-wider">SRIJAN 2025</div>
          </NavLink>

          <nav className="flex gap-6 items-center text-sm font-medium">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/events" className={linkClass}>Events</NavLink>
            <NavLink to="/ideathon" className={linkClass}>Ideathon</NavLink>
            <NavLink to="/team" className={linkClass}>Team</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {theme === 'dark' ? <span><Sun size={18} /></span> : <span><Moon size={18} /></span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-lg shadow-[0_-2px_5px_rgba(0,0,0,0.1)] z-50 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around items-center h-16 text-xs">
          <NavLink to="/" className={mobileLinkClass}><span><Home size={20}/></span>Home</NavLink>
          <NavLink to="/events" className={mobileLinkClass}><span><Calendar size={20}/></span>Events</NavLink>
          <NavLink to="/ideathon" className={mobileLinkClass}><span><Lightbulb size={20}/></span>Ideathon</NavLink>
          <NavLink to="/team" className={mobileLinkClass}><span><Users size={20}/></span>Team</NavLink>
        </div>
      </nav>
    </>
  );
}