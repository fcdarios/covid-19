import env from '../../env.json'
import { useForm } from 'react-hook-form'
import {useEffect, useState} from 'react'
import {getToken} from '../../src/token'
const NConsulta = (props) => {
  const {register, errors, handleSubmit} = useForm();
   
    

  const procesarFormulario = async (data, e) =>  {
    console.log(data);
    console.log('===========')
    try {
      let token = JSON.parse(getToken());
      let requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'token' : token},
          body: JSON.stringify(data)
      };
      await fetch(env.URL_SERVER+'/paciente', requestOptions).
        then(async response => {
          console.log(response);
      });

    } catch (error) {
        console.log('==========='+error)
    }

  
  }


    return (
      <div className='card justify-content-center nuevaConsulta'>
        <form className="form" method='post' id='form-consulta' onSubmit={handleSubmit(procesarFormulario)} >
            <div className='row'>
              <div className='row'>
                
                
              </div>
            </div>
        </form>
      </div>
    );
  };


  
export default NConsulta;


