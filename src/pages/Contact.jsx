import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      {/* Renderiza las rutas hijas aquí */}
      <Outlet />
    </div>
  );
};

export default Contact;
