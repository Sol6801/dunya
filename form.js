"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Form() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];
  const messages = require(`../../messages/${currentLocale}.json`);
  const t = messages.Form;

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    reason: '',
    comments: '',
    nativeLanguage: '' // Nuevo campo para el idioma materno
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        name: '',
        surname: '',
        email: '',
        reason: '',
        comments: '',
        nativeLanguage: ''
      });
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message });
    }
  };

  return (
    <section className="container mx-auto text-center py-6 px-5"> 
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-950">Contáctanos</h2>
        {status.success && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
            {t.success}
          </div>
        )}
        {status.error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {status.error}
          </div>
        )}
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

          {/* Nuevo campo para idioma materno */}
          <div>
            <label htmlFor="nativeLanguage" className="block text-left text-sm font-medium text-gray-700 mb-1">
              {t.nativeLanguage}
            </label>
            <select
              id="nativeLanguage"
              name="nativeLanguage"
              value={formData.nativeLanguage}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            >
              <option value="">{t.selectNativeLanguage}</option>
              <option value="Español">{t.es}</option>
              <option value="Português">{t.pt}</option> 
              <option value="English">{t.en}</option>
            </select>
          </div>

          <div>
            <label htmlFor="reason" className="block text-left text-sm font-medium text-gray-700 mb-1">
              {t.reason}
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            >
              <option value="">{t.selectReason}</option>
              <option value="Empresarial">{t.business}</option>
              <option value="Particular">{t.private}</option>
              <option value="Viagem">{t.travel}</option>
              <option value="Lazer">{t.pleasure}</option>
              <option value="Outros">{t.others}</option>
            </select>
          </div>

          <div>
            <label htmlFor="comments" className="block text-left text-sm font-medium text-gray-700 mb-1">
              {t.message}
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="w-full bg-blue-950 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300 disabled:bg-gray-400"
          >
            {status.submitting ? t.sending : t.submit}
          </button>
        </form>
      </div>
    </section>
  );
}