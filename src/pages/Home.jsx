import React from 'react';

import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>POKEMON GENERADO POR JENKINS</h1>
      <p>Pokemon por generación trabajo de IAW</p>
      <Outlet />
    </div>
  );
};

export default Home;
