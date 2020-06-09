import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';



import {useEffect, useState} from 'react'
const Ver_Consultas = () => {

  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() =>  {
    async function data(){
      if (!getToken()) {
        Router.push('/');
        console.log("Sin token");
        return;
      }else {
        let u = await getUsuario();
        let p = await getPaciente();
        setPaciente(JSON.parse(p))
        setUsuario(JSON.parse(u))
        if(usuario && paciente){
          setLogged(true)
          setLoading(false)
        }else {
          setLoading(false)
        }
      }
    }
    data();
  },[loading]);


  let html
  if (loading) {
    html = <div></div>
  }else{
    html = 
    <Container usuario={usuario} logged={logged}>
      <div className="paciente">
        <div className="row">
          <div className='col-12 d-flex justify-content-center p-2'>
            <h2>Nueva consulta</h2>
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

