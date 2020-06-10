import env from '../../env.json'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Router from 'next/router';


import { useForm } from 'react-hook-form'
import {useEffect, useState} from 'react'
import {getToken} from '../../src/token'
const NConsulta = (props) => {
  const {register, errors, handleSubmit} = useForm();
  const [tipo, setTipo ] = useState('leve');
  const [especialidades, setEspecialidades] = useState(props.especialidades)
  const [open, setOpen] = React.useState(false);
  const [consulta, setConsulta] = useState({
    sintomas: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    Router.push('/paciente/');
  };

  
  const procesarFormulario = async (data, e) =>  {
    
    data.estado = tipo;
    data.id_paciente = props.paciente.id;
    data.evidencia = ''    
    try {
      let token = JSON.parse(getToken());
      let requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'token' : token},
          body: JSON.stringify(data)
      };
      await fetch(env.URL_SERVER+'/consulta', requestOptions).
        then(async response => {
          setConsulta(data);
          setOpen(true);
      });

    } catch (error) {
        console.log('==========='+error)
    }
    

  }
    return (
      <div className='justify-content-center nuevaConsulta card'>
        <form className="form" method='post' id='form-consulta' onSubmit={handleSubmit(procesarFormulario)} >
            <div className='row'>
              <div className='col-6'>
                <div className='row'>
                  <div className='col-12'>
                      
                      <textarea type="text" name="sintomas" id="sintomas" className="textarea" placeholder="Sintomas"  ref={register} /> 
                  </div>
                </div>
              </div>
              <div className='col-2'> 
                <div className='row'>
                <div className='row'>
                  <label className="radio-container m-r-55">
                    Estado
                  </label>
                </div>
                  <label className="radio-container m-r-55">
                    Leve
                    <input type="radio" defaultChecked="checked" name="userType" ref={register}
                      onChange={e => setTipo('leve')}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className='row'>
                  <label className="radio-container m-r-55">
                    Moderado
                    <input type="radio"  name="userType" ref={register}
                      onChange={e => setTipo('moderado')}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className='row'>
                  <label className="radio-container m-r-55">
                    Grave
                    <input type="radio"  name="userType" ref={register}
                      onChange={e => setTipo('grave')}
                    />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className='col-4 medico'>
                <div className='row justify-content-center' >
                  <h1>Elige la especialidad del medico</h1>
                </div>
                <div className='row justify-content-center' >
                <select className="form-control" name="id_especialidad" id="id_especialidad" ref={register}>
                  {
                      especialidades.map(e => (
                        <option value={e.id} >{e.especialidad}</option>
                    ))
                   
                  }
                </select>
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
        <DialogTitle id="alert-dialog-title">{"Consulta generada con exito"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sintomas : {consulta.sintomas}
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


  
export default NConsulta;




