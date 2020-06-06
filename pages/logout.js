import env from '../env.json'
import Container from '../components/Container';
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
    <div>
      <Container>
      </Container>
    </div>
  )
}


export default Registro