import React,{useState,useEffect} from 'react'
import axios from 'axios'

const useGetProduct = (API) => {
     //Variable que almacena el valor iniciar, función modificadora
  const [data, setData] = useState([]);
 
  useEffect(async () => {
    const response = await axios(API);
    setData(response.data);
  }, []);

  return  data
}

export default useGetProduct


