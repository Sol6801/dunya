"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Form() {
  const pathname = usePathname();
  // Get the current locale from the URL path
  const currentLocale = pathname.split('/')[1];
  const messages = require(`../../messages/${currentLocale}.json`);
  const t = messages.Form;

    const [formData, setFormData] = useState({
      name: '',
      surname: '',
      email: '',
      motivation: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const mailtoLink = `mailto:dunyaidiomas@gmail.com?subject=${encodeURIComponent(formData.motivation)}&body=${encodeURIComponent(
        `name: ${formData.name}
  surname: ${formData.surname}
  Email: ${formData.email}
  motivation: ${formData.motivation}
  
  message:
  ${formData.message}`
      )}`;
  
      window.open(mailtoLink, '_blank');
    };

    return (
    <section className="container mx-auto text-center py-6 px-5"> 
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-950">Contáctanos</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-1">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="surname" className="block text-left text-sm font-medium text-gray-700 mb-1">
              {t.surname}
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
            {t.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          />
        </div>

        <div>
          <label htmlFor="motivation" className="block text-left text-sm font-medium text-gray-700 mb-1">
            {t.motivation}
          </label>
          <input
            type="text"
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 mb-1">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
        >
          {t.submit}
        </button>
      </form>
    </div>
  </section> 
  );
}