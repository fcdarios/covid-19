import React from 'react';
import Router from 'next/router';


const DatosPaciente = (props) => {
  let paciente =props.paciente;
  console.log(paciente);
 
  return (
  <div className="card">
      <div className="card-header">
          <h2>Datos de Paciente</h2>
      </div>
      <ul className="about-info px-2 m-1">
      <li className="d-flex"><span>Direccion:</span> <span>{paciente.direccion}</span></li>
        <li className="d-flex"><span>Municipio:</span> <span>{paciente.municipio}</span></li>
        <li className="d-flex"><span>Estado:</span> <span>{paciente.estado}</span></li>
        <li className="d-flex"><span>Pais:</span> <span>{paciente.pais}</span></li>
        <li className="d-flex"><span>Telefono:</span> <span>{paciente.telefono}</span></li>
        <li className="d-flex"><span>Nacimiento:</span> <span>{paciente.nacimineto}</span></li>
        <li className="d-flex"><span>No. Caso:</span> <span>{paciente.caso_covid19}</span></li>
        <li className="d-flex"><span>Alergias:</span> <span>{paciente.alergias}</span></li>
        <li className="d-flex"><span>Cirugias: </span> <span>{paciente.cirugias}</span></li>
        <li className="d-flex"><span>Enfermedades Crónicas:</span> <span>{paciente.enf_cronicas}</span></li>
      </ul>
      <button className="btn" onClick={() => {Router.push('/paciente/settings')}}>
          Editar
      </button>
    
  </div>
  );
};

export default DatosPaciente;

  