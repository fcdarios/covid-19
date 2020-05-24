
const ListUsers = (props) => {
  return (
    <div>
        {
            props.usuarios.map(user => (
                <div className="card m-2" style={{width: '18rem'}}>
                    <ul className="list-group list-group-flush"> 
                    <li className="list-group-item">Nombre {user.name}</li>
                    <li className="list-group-item">Usuario {user.username}</li>
                    <li className="list-group-item">Email {user.email}</li>
                    </ul>
                </div>
            ))
        }
    </div>
  );
};

export default ListUsers;
