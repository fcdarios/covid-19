import env from '../env.json'
import Main from '../components/Main';
import Link from 'next/link';
import React, {Fragment, useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router';



function Login (props) {

  const [tipo, setTipo ] = useState('paciente');
  const {register, errors, handleSubmit} = useForm();
  const [alerta, setAlerta] = useState('')

  useEffect(() =>  {
    if (localStorage.getItem('token') != null) {
        Router.push('/');
    }
  }, []);


  const procesarFormulario = (data, e) => {
    data.tipo = tipo;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch(env.URL_SERVER+'/login', requestOptions).
    then(async response => {
      const data = await response.json();
      if (data.code) {
        console.log(data)
        setAlerta(<div className="alert alert-danger" role="alert">
                  {data.message}
                  </div>)
        localStorage.clear();
      }else{
        console.log("Usuario logueado")  
        console.log(data)
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("roles", JSON.stringify(data.roles));
        localStorage.setItem("usuario", JSON.stringify(data)); 
        if (data.medico) {
          localStorage.setItem("medico", JSON.stringify(data.medico));
        }
        else {
          localStorage.setItem("paciente", JSON.stringify(data.paciente));
        }

        Router.push('/');
      }
      
      
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('Servidor apagado!', error);
    });
    
  }

  return ( 
    <Main title='login'>
      <div className="signUp">
        <Fragment>
        <div className="page-content">
          <div className="form-v5-content">
              <form className="form-detail" method='post' id='form-registrar' onSubmit={handleSubmit(procesarFormulario)} >
                <h2>Iniciar Sesion</h2>
                  <div className="form-row">
                    <input   
                      type="text"
                      name="username"
                      id="username"
                      className="input-text"
                      placeholder="Username"
                      ref={register}
                    />
                    <i className="fas fa-smile" />
                  </div>
                  <div className="form-row">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input-text"
                      placeholder="Password"
                      required
                      ref={register}
                    />
                    <i className="fas fa-lock" />
                  </div>
                  {alerta}
                  <div className="form-row-last">
                    <input
                      type="submit"
                      name="register"
                      className="register"
                      value="Aceptar"
                    />  
                  </div> 
                  <div className="form-data">
                    <Link href="/signup">
                      <a className="nav-link">
                          Crea una cuenta
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Fragment>
        </div>
    </Main>
  )
}


export default Login

async function get(params) {
  
}