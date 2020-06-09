import Router from 'next/router';

const DatosPaciente = (props) => {
  
  return (
    <div className="botones">
        <a className="btn" onClick={()=> {Router.push('/paciente'+props.ruta)}}>
            <h4>{props.title}</h4>
        </a>
    </div>
  );
};

export default DatosPaciente;


