import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import CountdownTimer from '../components/CountdownTimer';
import SponsorsMarquee from '../components/SponsorsMarquee';
// import FloatingShape from '../components/FloatingShape'; // FIX: Temporarily commented out to prevent crash
import { departmentalEvents, translations } from '../data';
import { motion } from 'framer-motion';

const EventPreviewCard = ({ event, index }) => (
  <motion.div 
    className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: index * 0.1 }}
  >
    <Link to="/events">
      <div className="overflow-hidden h-48">
        <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{event.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{event.department}</p>
      </div>
    </Link>
  </motion.div>
);

export default function HomePage() {
  const t = translations['en'];

  return (
    <>
      <SEO 
        title="Home" 
        description="SRIJAN 2025: The annual technical festival of SGSITS, Indore." 
      />
      
      <div className="relative">
        <Hero t={t} />
        {/* <FloatingShape /> */} {/* FIX: Temporarily removed */}
      </div>

      <div className="py-12 bg-light-bg dark:bg-dark-bg">
        <CountdownTimer />
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
           <p className="mb-10 text-gray-500 dark:text-gray-400">A glimpse into our premier competitions.</p>
           <div className="grid md:grid-cols-3 gap-8 mb-10 text-left">
             {departmentalEvents.slice(0,3).map((event, index) => (
               <EventPreviewCard key={index} event={event} index={index}/>
             ))}
           </div>
           <Link to="/events" className="px-6 py-3 font-semibold rounded-lg bg-primary-light text-white hover:opacity-90 transition-opacity">
             View Full Event Catalogue
           </Link>
        </div>
      </section>

      <SponsorsMarquee />
    </>
  );
}