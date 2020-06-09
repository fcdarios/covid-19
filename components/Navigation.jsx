import Link from "next/link";
import { getRol } from '../src/roles'
import { useEffect, useState } from 'react'
const Navigation = (props) => {
  const [rol, setRol] = useState('paciente');
  const [usuario, setUsuario] = useState(props.usuario);

  useEffect(() => {
    setRol(JSON.parse(getRol()));
  }, [])

  let li; let liMenu;
  if (!props.logged) {
    li = <><li className="nav-item">
      <Link href="/login">
        <a className="nav-link">
          <span>Iniciar sesion</span>
        </a>
      </Link>
    </li>
      <li className="nav-item">
        <Link href="/signup">
          <a className="nav-link">
            <span>Registrarse</span>
          </a>
        </Link>
      </li></>;
  } else {

    li = <li className="nav-item ">
      <div className="nav-link dropdown">
        <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {usuario.name}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link href={'/' + rol + ''}  >
            <a className="dropdown-item">
              <span>Perfil</span>
            </a>
          </Link>
          <Link href="/">
            <a className="dropdown-item">
              <span>Settings</span>
            </a>
          </Link>
          <Link href="/logout">
            <a className="dropdown-item">
              <span>LogOut</span>
            </a>
          </Link>
        </div>
      </div>
    </li>;
    if (rol == 'medico') {
      liMenu = <>
        <li className="nav-item">
          <Link href="/medico/Services">
            <a className="nav-link">
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/medico/Consultations">
            <a className="nav-link">
              <span>Consultations</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/medico/Invoices">
            <a className="nav-link">
              <span>invoices</span>
            </a>
          </Link>
        </li></>;
    }
  }


  return (
    <div className="NavigationBar">
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand" >Covid-19</a>
          </Link>
          <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto">
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">
                    <span>About</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
              {liMenu}
              {li}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
