import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import BotonPaciente from '../../components/paciente/BotonPaciente';
import DatosPaciente from '../../components/paciente/DatosPaciente';



import {useEffect, useState} from 'react'
const Index = () => {

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
          <div className='col-8'>
            <div className='row boxBotones'>
              <div className='col-4'>
                <BotonPaciente  title='Nueva Consulta' ruta='/nueva-consulta' />       
              </div>
              <div className='col-4'>
                <BotonPaciente  title='Buscar Doctor' ruta='/buscar-doctor'/>       
              </div>
              <div className='col-4'>
                <BotonPaciente  title='Revisar recetas' ruta='/revisar-recetas'/>       
              </div>
              <div className='col-4'>
                <BotonPaciente  title='Ver consultas' ruta='/ver-consultas' />       
              </div>
              <div className='col-4'>
                <BotonPaciente  title='Pagos realizados' ruta='/pagos'/>       
              </div>
              <div className='col-4'>
                <BotonPaciente  title='Compras' ruta='/compras'/>       
              </div>
            </div>
          </div>
          <div className='datos col-4'>
            <DatosPaciente paciente={paciente} />
          </div>
        </div>
      </div>
    </Container>
  }

  return ( 
    <Main title='Paciente'>
      {html}
    </Main>
  )
}

export default Index

