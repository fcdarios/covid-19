import env from '../../env.json'
import VerConsultas_column from './VerConsultas-column'
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
const VerConsultas = (props) => {
  const [loading, setLoad] = useState(true);
  const [paciente, setPaciente] = useState(props.paciente);

  const [consultas, setConsultas] = useState([
    
  ])

  useEffect(() => {
    async function getConsultas() {
        try {
          let token = props.token;
          const requestOptions = {
              method: 'GET',
              headers: { 'Content-Type': 'application/json', 'token' : token}
          };
          await fetch(env.URL_SERVER+'/paciente/consultas/'+paciente.id, requestOptions).
              then(async response => {
                  const json = await response.json();
                  setConsultas(json);
                  console.log(consultas);      
              })
              .catch(error => {
                  this.setState({ errorMessage: error.toString() });
                  console.error('Servidor apagado!', error);
            });
        } catch (error) {
              console.log('==========='+error)
        }
    }

    getConsultas();
  },[])

  let tabla;
  if(consultas.length>0){
    tabla = <>
            { consultas.map(c => (
                <VerConsultas_column paciente={paciente} consulta={c} />
              ))
            }
           </>
  }else{
    tabla = <>
              <div className="row justify-content-center cargando"><Loader
                type="ThreeDots"
                color="#c4c4c4"
                height={100}
                width={100}
                //3 secs
                /></div>
           </>
  }

    return (
      <div className='justify-content-center verConsultas card'>
            <div className='row'>
              <div className="col-12">
                <div className="row header">
                  
                  <div className="col-2">
                      Sintomas
                  </div>
                  <div className="col">
                      Estado
                  </div>
                  <div className="col">
                      Medico
                  </div>
                 
                  <div className="col">
                      Atendida
                  </div>
                  <div className="col">
                      Ver
                  </div>
                  <div className="col">
                      Ver receta
                  </div>
                  <div className="col">
                      Fecha
                  </div>
                  
                </div>
              </div>
              {tabla}
            </div>

      </div>
    );
  };

  


  
export default VerConsultas;




