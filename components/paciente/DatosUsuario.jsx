
const DatosUsuario = (props) => {
    let usuario = props.usuario;   
    const [open, setOpen] = React.useState(false);


    return (
    <div className="card">
        <div className="card-header">
            <h2>Datos de Usuario</h2>
        </div>
        <ul className="about-info px-2 m-1">
            <li className="d-flex"><span>Nombre:</span> <span>{usuario.name}</span></li>
            <li className="d-flex"><span>Username:</span> <span>{usuario.username}</span></li>
            <li className="d-flex"><span>Email:</span> <span>{usuario.email}</span></li>
        </ul>
        <button className="btn">
            Editar
        </button>
       
    </div>
    );
  };
  
  export default DatosUsuario;
  