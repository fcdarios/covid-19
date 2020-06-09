import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import DatosUsuario from '../../components/paciente/DatosUsuario';
import EditarPaciente from '../../components/paciente/EditarPaciente';
import BotonPaciente from '../../components/paciente/BotonPaciente';
import {getToken} from '../../src/token'


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
      <div className="pacienteSettings">
        <div className="row">
            <div className="row boxBotones">
                    <div className='col'>
                        <BotonPaciente  title='Perfil' ruta='/'/>       
                    </div>
                    <div className='col'>
                        <BotonPaciente  title='Nueva Consulta' ruta='/nueva-consulta' />       
                    </div>
                    <div className='col'>
                        <BotonPaciente  title='Buscar Doctor' ruta='/buscar-doctor'/>       
                    </div>
                    <div className='col'>
                        <BotonPaciente  title='Revisar recetas' ruta='/revisar-recetas'/>       
                    </div>
                    <div className='col'>
                        <BotonPaciente  title='Ver consultas' ruta='/ver-consultas' />       
                    </div>
                    <div className='col'>
                        <BotonPaciente  title='Pagos realizados' ruta='/pagos'/>       
                    </div>
                    <div className='col'>
                        <BotonPaciente  title='Compras' ruta='/compras'/>       
                    </div>
            </div>
            <div className='col-5'>
                <DatosUsuario usuario={usuario} />
                
            </div>
            <div className='col-7'>
              <EditarPaciente paciente={paciente} />
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

