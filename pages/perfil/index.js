import Head from 'next/head';
import Container from '../../components/Container';
import Navigation from '../../components/Navigation';
import {useEffect, useState} from 'react'
const Index = () => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() =>  {
    if (localStorage.getItem('usuario') != null) {
      setUser(JSON.parse(localStorage.getItem('usuario')));
      setLogged(true);
    }
    setLoading(false);
  }, []);


  let html
  if (loading) {
    html = <div></div>
  }else{
    html = 
    <Container usuario={user} logged={logged} >
        <h1>Index Perfil</h1>
    </Container>
  }

  return ( 
    <div>
      <Head>
        <title>Index Perfil</title>
      </Head>
      {html}
    </div>
  )
}



export default Index