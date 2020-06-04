import env from '../env.json'
import Head from 'next/head';
import Link from 'next/link';
import React, {Fragment, useState} from 'react'
import { useForm } from 'react-hook-form'
import Router from 'next/router';



function Registro (props) {

  const [tipo, setTipo ] = useState('paciente');

  const {register, errors, handleSubmit} = useForm();


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
        localStorage.setItem("usuario", JSON.stringify(data));
        Router.push('/');
      }
      
      
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('Servidor apagado!', error);
    });
    
  }

  

  return ( 
    <div className="">
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/materia/bootstrap.min.css" rel="stylesheet" integrity="sha384-uKLgCN8wZ+yo4RygxUNFhjywpL/l065dVTzvLuxys7LAIMmhZoLWb/1yP6+mF925" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

        <title>Registrar</title>
      </Head>
      <div className="signUp">
        <Fragment>
        <div className="page-content">
          <div className="form-v5-content">
              <form className="form-detail" method='post' id='form-registrar' onSubmit={handleSubmit(procesarFormulario)} >
                <h2>Registra una cuenta</h2>
                <div className="form-row">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input-text"
                      placeholder="Your Name"
                      required
                      ref={register}
                    />
                    <i className="fas fa-user" />
                </div>
                  <div className="form-row">
                    <label htmlFor="username">Username</label>
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
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="input-text"
                      placeholder="Your Email"
                      required
                      pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                      ref={register}
                    />
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input-text"
                      placeholder="Your Password"
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
                      defaultValue="Register"
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
    </div>
  )
}


export default Registro