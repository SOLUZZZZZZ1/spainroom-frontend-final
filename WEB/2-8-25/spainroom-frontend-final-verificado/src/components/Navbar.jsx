
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

export default function Navbar() {
  return (
    <>
      <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SpainRoom Logo" style={{ width: "60px" }} />
        </div>
        <div className="flex gap-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/listado" className="hover:underline">Listado</Link>
          <Link to="/jobs" className="hover:underline">Jobs</Link>
          <Link to="/reservas" className="hover:underline">Reservas</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
          <Link to="/oportunidades" className="hover:underline">Oportunidades</Link>
          <Link to="/habitaciones" className="hover:underline">Habitaciones</Link>
        </div>
      </nav>
      <div className="h-[4px] bg-blue-800 w-full" />
    </>
  );
}
