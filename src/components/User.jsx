import React from 'react';
import { useParams } from 'react-router-dom';

/* aqui importamos las imagenes que usaremos para mostrar cuando selecione contacto */
import ima1 from '../assets/ima1.jpg'; 
import ima2 from '../assets/ima2.jpg'; 


const User = () => {
  const { username } = useParams(); 

/* asignamos la descripcion de los contactos , imagen, texto */
  const userInfo = {
    domingo: {
      image: ima1, 
      message: "IAW", 
    },
    morgado: {
      image: ima2, 
      message: "HLC", 
    },
  };

/* Buscar informacion de los usuarios */
  const user = userInfo[username?.toLowerCase()];

/* en el caso de no encontrar contacto saldra este error que asignamos */
  if (!user) {
    return <p>No hay contacto horror! </p>;
  }

  /* esta es la plantilla para contacto  */
  return (
    <div>
      <h1></h1>
      <h3>Profesor: {username}</h3>
      <img
      /* mostrara la imagen segun corresponda el contacto */
        src={user.image} 
        alt={`Imagen de ${username}`}
        /* aqui le damos el tamaño a la imagen */
        style={{ width: '150px' }}
      />
      <p>{user.message}</p> {/* Mostrar mensaje personalizado */}
    </div>
  );
};

export default User;
