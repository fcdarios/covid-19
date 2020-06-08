import env from '../../env.json'
import Main from '../../components/Main';
import Container from '../../components/Container';
import BotonPaciente from '../../components/paciente/BotonPaciente';

import DatosUsuario from '../../components/paciente/DatosUsuario';
import DatosPaciente from '../../components/paciente/DatosPaciente';
import EditarPaciente from '../../components/paciente/EditarPaciente';
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
      }
      try {
            let token = JSON.parse(getToken());
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'token' : token}
            };
            await fetch(env.URL_SERVER+'/user/perfil', requestOptions).
                then(async response => {
                      const data = await response.json();
                      setUsuario(data);
                      await fetch(env.URL_SERVER+'/paciente/perfil', requestOptions).
                          then(async response => {
                                const data = await response.json();
                                setPaciente(data);   
                                setLogged(true)
                                setLoading(false)
                          })
                          .catch(error => {
                                this.setState({ errorMessage: error.toString() });
                                console.error('Servidor apagado!', error);
                      });
                })
                .catch(error => {
                      this.setState({ errorMessage: error.toString() });
                      console.error('Servidor apagado!', error);
            });
              
      } catch (error) {
            console.log('==========='+error)
      }
    }

    data();
  }, []);


  let html
  if (loading) {
    html = <div></div>
  }else{
    html = 
    <Container usuario={usuario} logged={logged}>
      <div className="paciente">
        <div className="row">
          <div className='col-3'>
            <BotonPaciente  title='Nueva Consulta' ruta='' />       
          </div>
          <div className='col-3'>
            <BotonPaciente  title='Buscar Doctor' />       
          </div>
          <div className='col-3'>
            <BotonPaciente  title='Revisar recetas' />       
          </div>
          <div className='col-3'>
            <BotonPaciente  title='Ver consultas' />       
          </div>
          <div className='col-3'>
            <BotonPaciente  title='Pagos realizados'/>       
          </div>
          <div className='col-3'>
            <BotonPaciente  title='Compras'/>       
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

