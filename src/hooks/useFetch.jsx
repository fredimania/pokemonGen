/* importamos los hook  nos serviran para luego usar la api */
import { useState, useEffect } from 'react';
/* tambien usaremos aixos que facilitara solicitud de API */
import axios from 'axios';

/* usaremos una funcion que personalizaremos  */
const useFetch = (url) => {
 /*  aqui esta el estado que almacena las API */
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

/*   ejecuta el codigo dentro de la funcion */
  useEffect(() => {
   /*  tenemos la funcion asincrona */
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
      /*   actualzia el estado de los datos API */
        setData(response.data.results || response.data); 

      /*   cambia el estado, a false si es correcto */
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [url]);

 /*  el hook retorna con 2 propiedades */
  return { data, loading };
};

export default useFetch;
