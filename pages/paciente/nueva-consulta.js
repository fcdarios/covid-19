import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import BotonPaciente from '../../components/paciente/BotonPaciente';
import NConsulta from '../../components/paciente/NConsulta';




import {useEffect, useState} from 'react'
const NuevaConsulta = () => {

  const [loadE, setLoadE] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [logged, setLogged] = useState(false);

  
  const [especialidades, setEspecialidades] = useState([
    {
      id: 0,
      especialidad : 'No'
    }
  ])


  useEffect(() =>  {
    async function data(){
      if (!getToken()) {
        Router.push('/');
        console.log("Sin token");
        return;
      }else {
        let u = await getUsuario();
        let p = await getPaciente();
       
        if(!loadE){
          if (getToken()) {
            try {
                let token = JSON.parse(getToken());
                const requestOptions = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', 'token' : token}
                };
                await fetch(env.URL_SERVER+'/especialidad', requestOptions).
                    then(async response => {
                        const json = await response.json();
                        setEspecialidades(json);
                        if(especialidades){
                          setPaciente(JSON.parse(p))
                          setUsuario(JSON.parse(u))

                          setLoadE(true)
                          setLogged(true)
                          setLoading(false)
                        }
  
                        
                    })
                    .catch(error => {
                        this.setState({ errorMessage: error.toString() });
                        console.error('Servidor apagado!', error);
                });
            } catch (error) {
                  console.log('==========='+error)
            }
          }else{
              return null;
          } 
        }
        
      }
    }
    data();
  },[loadE]);



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
          <div className='col-10'>
            <NConsulta usuario={usuario} paciente={paciente} especialidades={especialidades} />
          </div>
          <div className='col-2'>
            
          </div>
        </div>
      </div>
    </Container>
  }

  return ( 
    <Main title='Nueva consulta'>
      {html}
    </Main>
  )
}

export default NuevaConsulta

