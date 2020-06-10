import env from '../../env.json'
import { useForm } from 'react-hook-form'
import {useEffect, useState} from 'react'
import {getToken} from '../../src/token'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Router from 'next/router';
import {setPacientelocal} from '../../src/data'
const EditarPaciente = (props) => {
  const [open, setOpen] = React.useState(false);
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

   

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      localStorage.setItem('paciente', JSON.stringify(paciente))
      Router.push('/paciente/');
    };

  const procesarFormulario = async (data, e) =>  {
    try {
      let token = JSON.parse(getToken());
      let requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'token' : token},
          body: JSON.stringify(data)
      };
      await fetch(env.URL_SERVER+'/paciente', requestOptions).
        then(async response => {
          setPaciente({...paciente, 
            direccion : data.direccion,
            municipio: data.municipio,
            estado: data.estado,
            pais: data.pais,
            telefono: data.telefono,
            nacimiento: data.nacimiento,
          })
          
          setOpen(true);
      });

    } catch (error) {
        console.log('==========='+error)
    }

  
  }


    return (
      <div className='card editar'>
      <form className="form" method='post' id='form-registrar' onSubmit={handleSubmit(procesarFormulario)} >
        <div className="row"> 
          <div className='col-6'>
              <input type="text" defaultValue={paciente.direccion}  name="direccion" id="direccion" className="input" placeholder="Direccion"  ref={register} /> 
          </div>
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
              <input type="text" defaultValue={paciente.alergias} name="alergias" id="alergias" className="input" placeholder="Alergias"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="text" defaultValue={paciente.cirugias} name="cirugias" id="cirugias" className="input" placeholder="Cirugias"  ref={register} /> 
          </div>
          <div className='col-6'>
              <input type="text" defaultValue={paciente.enf_cronicas} name="enf_cronicas" id="enf_cronicas" className="input" placeholder="Enfermedades cronicas"  ref={register} /> 
          </div>
          <div className='col-6'>
              <div className="label">
                Caso covid: {paciente.caso_covid19}
              </div>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Correcto"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Datos actualizados con exito
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  };


  
export default EditarPaciente;


