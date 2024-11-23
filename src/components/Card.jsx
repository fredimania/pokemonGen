import React from 'react';

const Card = ({ name, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
