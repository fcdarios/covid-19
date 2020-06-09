import env from '../env.json'
import Main from '../components/Main';
import { useState, useEffect} from 'react'
import Router from 'next/router';



function Registro (props) {
  const [loading, setLoading] = useState(true);

  useEffect(() =>  {
    localStorage.clear();
    console.log("Saliendoooo")
    Router.push('/');
  }, []);


  return ( 
    
    <Main title='Saliendo...'>
    </Main>
  
  )
}


export default Registro