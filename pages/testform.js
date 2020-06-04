import env from '../env.json'
import Head from 'next/head';
import React, {Fragment, useState} from 'react'
import { useForm } from 'react-hook-form'

function Test (props) {

  // const [register, setRegister ] = useState({
  //   username: '',
  //   password:'',
  //   medico: false,
  //   paciente:false
  // });

  const [tipo, setTipo ] = useState({
    tipo: 'paciente',
  });

  const {register, errors, handleSubmit} = useForm();

  


  const procesarFormulario = (data, e) => {
    console.log(data);
    console.log(tipo);
    
    
}

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(data)
// };

// fetch(env.URL_SERVER+'/signup', requestOptions).
// then(async response => {
//   const data = await response.json();
//   console.log(data);
  
// })
// .catch(error => {
//   this.setState({ errorMessage: error.toString() });
//   console.error('There was an error!', error);
// });
  
  return ( 
    <Fragment>
      <Head>
        <title>Registrar</title>
      </Head>
      <div>
      <div>
      <Head>
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/materia/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-uKLgCN8wZ+yo4RygxUNFhjywpL/l065dVTzvLuxys7LAIMmhZoLWb/1yP6+mF925"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
      </Head>
      <div className="signUp">
        <div className="page-content">
          <div className="form-v5-content">
            <form className="form-detail"  
              method='post'   
              id='form-registrar'
              onSubmit={handleSubmit(procesarFormulario)}
            >
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
                  ref={register}
                />
                <i className="fas fa-envelope" />
              </div>
              <div className="form-row">
                <label className="radio-container m-r-55">
                  Paciente
                  <input type="radio" defaultChecked="checked" name="userType" ref={register} onChange={e => setTipo('paciente')}/>
                  <span className="checkmark" />
                </label>
                <label className="radio-container">
                  Medico
                  <input type="radio" name="userType" ref={register} onChange={e => setTipo('medico')} />
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
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    </Fragment>
  )
}


export default Test