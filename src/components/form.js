"use client"

import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      email: '',
      motivo: '',
      mensaje: ''
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
      
      const mailtoLink = `mailto:dunya@gmail.com?subject=${encodeURIComponent(formData.motivo)}&body=${encodeURIComponent(
        `Nombre: ${formData.nombre}
  Apellido: ${formData.apellido}
  Email: ${formData.email}
  Motivo: ${formData.motivo}
  
  Mensaje:
  ${formData.mensaje}`
      )}`;
  
      window.location.href = mailtoLink;
    };

    return (
    <section className="container mx-auto text-center py-6"> 
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-cyan-700">Contáctanos</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="nombre" className="block text-left text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="apellido" className="block text-left text-sm font-medium text-gray-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="motivo" className="block text-left text-sm font-medium text-gray-700 mb-1">
            Motivo de la consulta
          </label>
          <input
            type="text"
            id="motivo"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-left text-sm font-medium text-gray-700 mb-1">
            Escriba su consulta
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  </section> 
  );
}