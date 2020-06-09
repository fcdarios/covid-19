import env from '../env.json'
import {getToken} from './token'

const paciente_key = 'paciente';
const usuario_key = 'usuario';


export async function getPaciente() {
    if (!localStorage.getItem(paciente_key)) {
        try {
            let token = JSON.parse(getToken());
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'token' : token}
            };
            await fetch(env.URL_SERVER+'/paciente/perfil', requestOptions).
                then(async response => {
                    const data = await response.json();
                    localStorage.setItem(paciente_key, JSON.stringify(data));
                    let paciente =  localStorage.getItem(paciente_key);
                    return JSON.parse(paciente);
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('Servidor apagado!', error);
            });
      } catch (error) {
            console.log('==========='+error)
      }
        
    }else{
        let paciente = localStorage.getItem(paciente_key);
        return paciente;
    } 
}

export async function getUsuario() {
    if (!localStorage.getItem(usuario_key)) {
        try {
            let token = JSON.parse(getToken());
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'token' : token}
            };
            await fetch(env.URL_SERVER+'/user/perfil', requestOptions).
                then(async response => {
                    const data = await response.json();
                    localStorage.setItem(usuario_key, JSON.stringify(data));
                    return localStorage.getItem(usuario_key);
                })
                .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('Servidor apagado!', error);
            });
      } catch (error) {
            console.log('==========='+error)
      }
        
    }else{
        return localStorage.getItem(usuario_key);
    } 
}