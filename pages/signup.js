import env from '../env.json'
import Main from '../components/Main';
import Link from 'next/link';
import React, {Fragment, useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router';

function Registro (props) {

  const [tipo, setTipo ] = useState('paciente');

  const {register, errors, handleSubmit} = useForm();

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

    fetch(env.URL_SERVER+'/signup', requestOptions).
    then(async response => {
      const data = await response.json();
      
      if (data.code) {
        console.log(data.message)  
        localStorage.clear();
      }else{
        console.log("Usuario registrado")  
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
    <Main title='SignUp'>
      <div className="signUp">
        <Fragment>
        <div className="page-content">
          <div className="form-v5-content">
              <form className="form-detail" method='post' id='form-registrar' onSubmit={handleSubmit(procesarFormulario)} >
                <h2>Registra una cuenta</h2>
                <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-text"
                      placeholder="Nombre"
                      required
                      ref={register}
                    />
                    <i className="fas fa-user" />
                </div>
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
                      type="text"
                      name="email"
                      id="email"
                      className="input-text"
                      placeholder="Email"
                      required
                      pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                      ref={register}
                    />
                    <i className="fas fa-envelope" />
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
                  <div className="form-row">
                    <label className="radio-container m-r-55">
                      Paciente
                      <input type="radio" defaultChecked="checked" name="userType" ref={register}
                        onChange={e => setTipo('paciente')}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="radio-container">
                      Medico
                      <input type="radio" name="userType" ref={register} 
                        onChange={e => setTipo('medico')}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-row-last">
                    <input
                      type="submit"
                      name="register"
                      className="register"
                      value="Registrar"
                    />
                  </div>
                  <div className="form-row-last">
                    <Link href="/login">
                      <a className="nav-link">
                          logIn
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


export default Registro