import env from '../../env.json'
import {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const VerConsultas = (props) => {
    const [paciente, setPaciente] = useState(props.paciente);
    const [nameMedico, setMedico] = useState('');
    const [atendida, setAtendida] = useState('');
    const [consulta, setConsulta] = useState(props.consulta);

    useEffect(() =>{
        if (paciente.usuario == null) {
            setMedico('Sin asignar')
        }else{
            setMedico(paciente.usuario.name)
        }

        if (!paciente.atendida) {
            setAtendida('No')
        }else{
            setAtendida('Si')
        }

    },[])

const [open, setOpen] = React.useState(false);  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };


    return (
     
        <div className="col-12">
        <div className="row body">
           
            <div className="col-2">
                {consulta.sintomas}
            </div>
            <div className="col">
                {consulta.estado}
            </div>
            <div className="col">
                {
                  nameMedico
                }
            </div>
                
            <div className="col">
                {atendida}
            </div>
            <div className="col">
                <button className='btn eye' onClick={handleClickOpen} >
                    <i className="fas fa-eye" />
                </button>
                
            </div>
            <div className="col">
                <button className='btn pdf'>
                    <i className="fas fa-file-pdf" />
                </button>
            </div>
            <div className="col">
                {consulta.fecha}
            </div>
        </div>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Consulta del dia "+consulta.fecha}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Atendida : {atendida}
            <br></br>
            Sintomas : {consulta.sintomas}
            <br></br>
            Medico:  { nameMedico}
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


  
export default VerConsultas;




