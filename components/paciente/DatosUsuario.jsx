
const DatosUsuario = (props) => {
    let usuario = props.usuario;   
    const [open, setOpen] = React.useState(false);


    return (
    <div className="datos2 card">
        <ul className="about-info px-2 m-1">
            <li className="d-flex"><span>Nombre:</span> <span>{usuario.name}</span></li>
            <li className="d-flex"><span>Username:</span> <span>{usuario.username}</span></li>
            <li className="d-flex"><span>Email:</span> <span>{usuario.email}</span></li>
        </ul>
    </div>
    );
  };
  
  export default DatosUsuario;
  