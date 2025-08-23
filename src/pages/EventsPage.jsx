import React, { useState } from "react";
import { departmentalEvents } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";
import Tilt from "react-parallax-tilt";

// Card Component
const EventCard = ({ event, onRegisterClick, onScheduleClick }) => (
  <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden group h-full flex flex-col">
      <div className="overflow-hidden h-48">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-primary-dark">{event.name}</h2>
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">
          {event.department}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
          {event.description}
        </p>
        <div className="flex gap-4 mt-auto">
          <button
            onClick={onScheduleClick}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Calendar size={16} /> View Schedule
          </button>
          <button
            onClick={onRegisterClick}
            className="w-full py-2 px-4 rounded-lg bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </Tilt>
);

// Main Page
export default function EventsPage() {
  const [scheduleModal, setScheduleModal] = useState(null);
  const [registerModal, setRegisterModal] = useState(null);

  return (
    <div className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Departmental Events
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {departmentalEvents.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onScheduleClick={() => setScheduleModal(event)}
              onRegisterClick={() => setRegisterModal(event)}
            />
          ))}
        </div>
      </div>

      {/* Schedule Modal */}
      <AnimatePresence>
        {scheduleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setScheduleModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setScheduleModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-2">{scheduleModal.name}</h2>
              <h3 className="text-lg font-semibold text-cyan-500 mb-6">
                Schedule
              </h3>
              <ul className="space-y-4">
                {scheduleModal.schedule.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="font-bold text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md">
                      {item.time}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {item.topic}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Modal */}
      <AnimatePresence>
        {registerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setRegisterModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setRegisterModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-4">
                Register for {registerModal.name}
              </h2>
              <div className="w-full">
                {/* Placeholder Google Form embed */}
                <iframe
                  src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Google Form"
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
