import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import Loading from '../../components/Loading'

import Casos from '../../components/covid19/casosMexico'

import {useEffect, useState} from 'react'
const Index = () => {

  const [loading, setLoading] = useState(0);
  const [usuario, setUsuario] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [logged, setLogged] = useState(false);

  const [mexico, setMexico] = useState(null);
  const [global, setGlobal] = useState(null);
  

  useEffect(() =>  {
    let date = Date.now()
    console.log(date)
    async function data(){
      
    }
    data();
  },[loading]);


  useEffect(() =>  {
    async function data(){
      if(loading != 2){
        let u = await getUsuario();
        let p = await getPaciente();
        setPaciente(JSON.parse(p))
        setUsuario(JSON.parse(u))
        if(usuario && paciente){
          setLogged(true)
          setLoading(2)
        }else {
          setLoading(1)
        }
      }
    }
    data();
  },[loading]);


  
  let html
  if (loading != 2) {
    html = <div><Loading/></div>
  }else{
    html = 
    <Container usuario={usuario} logged={logged}>
      <div className="covid">
        <div className="row">
          <div className="col-4">
            <Casos title='Mexico' />
          </div>
          <div className="col-4">
            <Casos title='Global' />
          </div>
          <div className="col-4">
            <Casos title='Mapa' />
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

