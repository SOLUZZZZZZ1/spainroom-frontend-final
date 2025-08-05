import React from 'react';

export default function CardSpainRoom({ ciudad, descripcion, precio }) {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-md mb-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">{descripcion}</h2>
      <p className="text-gray-700">{ciudad}</p>
      <p className="font-semibold mt-2">{precio}</p>
    </div>
  );
}