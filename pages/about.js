import Head from 'next/head';
import Container from '../components/Container';
import {useEffect, useState} from 'react'
const About = () => {

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
        <h1>About</h1>
    </Container>
  }

  return ( 
    <div>
      <Head>
        <title>About</title>
      </Head>
      {html}
    </div>
  )
}

export default About