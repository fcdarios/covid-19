import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import VerConsultas from '../../components/paciente/VerConsultas';
import Loading from '../../components/Loading'



import {useEffect, useState} from 'react'
const Ver_Consultas = () => {

  const [loading, setLoading] = useState(0);
  const [usuario, setUsuario] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() =>  {
    if(loading != 2){
    async function data(){
      if (!getToken()) {
        Router.push('/');
        console.log("Sin token");
        return;
      }else {
        let u = await getUsuario();
        let t = await getToken();
        let p = await getPaciente();
        setToken(JSON.parse(t))
        setPaciente(JSON.parse(p))
        setUsuario(JSON.parse(u))
        if(usuario && paciente){
          setLogged(true)
          setLoading(2)
        }else{
          setLoading(1);
        }
      }
    }
    data();
  }
  },[loading]);


  let html
  if (loading != 2) {
    html = <div><Loading/></div>
  }else{
    html = 
    <Container usuario={usuario} logged={logged}>
      <div className="paciente">
        <div className="row">
          <div className='col-12 d-flex justify-content-center p-2'>
            <h2>Mis consultas</h2>
          </div>
          <div className='col-12 d-flex justify-content-center p-2'>
            <VerConsultas paciente={paciente} token={token} />
          </div>
        </div>
      </div>
    </Container>
  }

  return ( 
    <Main title='Consultas'>
      {html}
    </Main>
  )
}

export default Ver_Consultas

