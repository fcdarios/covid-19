import Head from 'next/head';
import Container from '../components/Container';
import fetch from 'isomorphic-fetch'
import { useState } from 'react';

const login = (props) => {

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container>
                <ul className="nav nav-pills mb-3">
                    <li className="nav-item active">
                        <a href="#medicos" className="nav-link active" data-toggle="pill" role="tab">Login Medicos</a>
                    </li>
                    <li className="nav-item">
                        <a href="#pacientes" className="nav-link" data-toggle="pill" role="tab">Login Pacientes</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="medicos">
                        <form id="formularioMedico">
                            <div className="card card-body" style={{
                                height: "20rem",
                                alignItems: 'center', borderRadius: '25px', WebkitBoxShadow: "0px 0px 24px 3px rgb (220, 229,239)",
                                MozBboxSshadow: "0px 0px 24px 3px rgb (220, 229,239)", boxShadow: "0px 0px 24px 3px rgb (220, 229,239)"
                            }}>
                                <h3 className="text text-success my-3">Login Medicos</h3>
                                <div className="form-group my-3" style={{ width: '100%' }}>
                                    <input type="text" className="form-control" name="textMedico" placeholder="nombre de usuario" style={{ borderRadius: '25px', textAlign: "center" }} />
                                </div>
                                <div className="form-group" style={{ width: '100%' }}>
                                    <input type="password" className="form-control" name="textPassMedico" placeholder="contraseña" style={{ borderRadius: '25px', textAlign: "center" }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '25px' }} onClick={login.LoginMedico}>Iniciar sesion</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="pacientes">
                        <form>
                            <div className="card card-body" style={{
                                height: "20rem",
                                alignItems: 'center', borderRadius: '25px', WebkitBoxShadow: "0px 0px 30px 3px rgb (220, 229,239)",
                                MozBboxSshadow: "0px 0px 30px 3px rgb (220, 229,239)", boxShadow: "0px 0px 24px 3px rgb (220, 229,239)"
                            }}>
                                <h3 className="text text-success my-3">Login Pacientes</h3>
                                <div className="form-group my-3" style={{ width: '100%' }}>
                                    <input type="text" className="form-control" id="textPaciente" placeholder="nombre de usuario" style={{ borderRadius: '25px', textAlign: "center" }} />
                                </div>
                                <div className="form-group" style={{ width: '100%' }}>
                                    <input type="password" className="form-control" id="textPassPaciente" placeholder="contraseña" style={{ borderRadius: '25px', textAlign: "center" }} />
                                </div>
                                <div style={{ width: '100%' }}>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '25px' }} onClick={login.LoginPaciente}>Iniciar sesion</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

login.LoginMedico = async (ctx) => {
    ctx.preventDefault();
    //Trae informacion del formulario del medico
    const formMedico = document.getElementById('formularioMedico')
    const datos = new FormData(formMedico)
    login.state.username = datos.get('textMedico')
    login.state.password = datos.get('textPassMedico')
    
    //Utiliza la funcion Login para encontrar al usuario
    const res = await login.Login()
    
    if(res.length!=0){}
    else
        alert("Datos incorrectos")

    //Va a buscar la informacion del medico
    const user = await fetch('http://localhost:3001/medico/info/'+ res.id, {
        method: 'GET',
        headers: {
            'access-token': res.token,
        },
        cache: 'no-cache'
    }).then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.error(err)
    });

    if(user.length!=0){
        alert("Inicio de sesion de "+res.username+" con numero de cedula "+user[0].cedula)
    }else{
        alert("El usuario no es un medico")
    }
}

login.LoginPaciente = async (ctx) => {
    ctx.preventDefault();
    //Trae informacion dle formulario del paciente
    const formMedico = document.getElementById('formularioPaciente')
    const datos = new FormData(formMedico)
    login.state.username = datos.get('textPaciente')
    login.state.password = datos.get('textPassPaciente')
    
    //Utiliza la funcion Login para encontrar al usuario
    const res = await login.Login()

    //Va a buscar la informacion del paciente
    const user = await fetch('http://localhost:3001/paciente/info/'+ res.id, {
        method: 'GET',
        headers: {
            'access-token': res.token,
        },
        cache: 'no-cache'
    }).then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.error(err)
    });

    if(user.length!=0){
        alert("Inicio de sesion de "+res.username+" con telefono "+user[0].telefono)
    }else{
        alert("El usuario no es un paciente")
    }
}

login.Login = async () => {
    const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            username: login.state.username,
            password: login.state.password
        }),
        cache: 'no-cache'
    }).then(function (response) {
        return response.json();
    }).catch(function (err) {
        console.error(err)
    });
    return res
}

login.state = {
    username: '',
    password: '',
    tipo: ''
}

export default login;
