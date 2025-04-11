import { useState } from "react";
import { motion } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addEvent = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.description) return;

    const newEvent = {
      ...formData,
      id: Date.now(),
    };

    setEvents([newEvent, ...events]);
    setFormData({ title: "", date: "", description: "" });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-10 py-16 px-6 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Events 🎉
      </h2>

      {/* Event Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-16">
        {events.length > 0 ? (
          events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                📅 <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                📝 {event.description}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-3">
            No events added yet.
          </p>
        )}
      </div>

      {/* Add Event Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-4">
          Add New Event 📝
        </h3>

        <form onSubmit={addEvent} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            rows="3"
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-pink-600 text-white py-2 rounded-md font-semibold text-lg"
          >
            Add Event 🚀
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Events;
