import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Estado para controlar el submenú

 /*  usamos esta funcion tooglesubmenu cotrola sub menu */
  const toggleSubmenu = () => {
    /* aqui actualizamos el estado  */
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/gen1">Generación 1</NavLink></li>
        <li><NavLink to="/gen2">Generación 2</NavLink></li>
        <li><NavLink to="/gen3">Generación 3</NavLink></li>
        <li
        /* con este comando podemos deplegar y salir del sub menu */
          className="submenu"
          onMouseEnter={toggleSubmenu}
          onMouseLeave={toggleSubmenu}
        >
          <NavLink to="/contact">Contactos</NavLink>
      {/* con este comando tendremos el menu desplegable  */}
          {isSubmenuOpen && (
            <ul className="submenu-list">
              <li><NavLink to="/contact/domingo">Domingo</NavLink></li>
              <li><NavLink to="/contact/morgado">Morgado</NavLink></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

