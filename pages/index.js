import Main from '../components/Main';
import Container from '../components/Container';
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
    html = <div>Cargando</div>
  }else{
    html = 
    <Container usuario={user} logged={logged} >
        <h1>Index</h1>
    </Container>
  }

  return ( 
    <Main title='Home'>
      {html}
    </Main>
  )
}



export default Index