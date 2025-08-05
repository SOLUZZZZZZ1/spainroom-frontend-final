import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: "url('/casa-diseno.jpg')" }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">SpainRoom</h1>
        <p className="text-xl md:text-2xl mb-6 italic">Los que saben</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/listado"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            Buscar habitación
          </Link>
          <Link
            to="/oportunidades"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            Oportunidades
          </Link>
          <Link
            to="/admin"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            Publicar
          </Link>
        </div>
      </div>
    </div>
  );
}