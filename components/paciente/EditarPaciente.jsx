import env from '../../env.json'
import { useForm } from 'react-hook-form'
import {useEffect, useState} from 'react'
const EditarPaciente = (props) => {
    const [paciente, setPaciente] = useState({
      direccion : '',
      municipio: '',
      estado: '',
      pais: '',
      telefono: '',
      nacimiento: '',
      caso_covid19: ''
    })
    useEffect(() => {
      async function get(){
        await setPaciente(props.paciente);
      }

      get();
      
    },[])
    
    const {register, errors, handleSubmit} = useForm();

   
    

  const procesarFormulario = (data, e) => {
    console.log(data)
  }


    return (
      <div className='card editar'>
      <form className="form" method='post' id='form-registrar' onSubmit={handleSubmit(procesarFormulario)} >
        <div className="row"> 
          <div className='col-6'>
              <input type="text" defaultValue={paciente.municipio}  name="municipio" id="municipio" className="input" placeholder="Municipio"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="text" defaultValue={paciente.pais}  name="pais" id="pais" className="input" placeholder="Pais"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="text" defaultValue={paciente.estado}  name="estado" id="estado" className="input" placeholder="Estado"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="number" defaultValue={paciente.telefono}  name="telefono" id="telefono" className="input" placeholder="Telefono"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="date" defaultValue={paciente.nacimiento} name="nacimiento" id="nacimiento" className="input" placeholder="Nacimiento"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="text" defaultValue={paciente.caso_covid19}  name="caso_covid19" id="caso_covid19" className="input" placeholder="caso_covid19"  ref={register} /> 
          </div>
          <div className="col-12">
            <input
                type="submit"
                name="register"
                className="register"
                value="Guardar"
            />
          </div>  
        </div>   
      </form>
      </div>
    );
  };


  
export default EditarPaciente;


