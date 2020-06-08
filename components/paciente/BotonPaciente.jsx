import Router from 'next/router';

const DatosPaciente = (props) => {
  
  return (
    <div className="botones">
        <a onClick={()=> {Router.push('/paciente'+props.ruta)}}>
            <div className="card">
                    <h4>{props.title}</h4>
            </div>
        </a>
    </div>
  );
};

export default DatosPaciente;


