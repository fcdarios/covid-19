import Main from '../../components/Main';
import Container from '../../components/Container';
import { useEffect, useState } from 'react'
import Router from 'next/router';
import env from '../../env.json'
import { getToken } from '../../src/token'
import Link from "next/link";

const Especialidad = () => {

    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);

    const [especialidad, setEspecialidad] = useState(null);
    const [us, setUs] = useState(null);
    const [medico, setMedico] = useState(null);

    useEffect(() => {
        async function data() {
            console.log(localStorage.getItem('usuario').name)
            setUser(JSON.parse(localStorage.getItem('usuario')));
            if (!getToken()) {
                Router.push('/');
                console.log("Sin token");
                return;
            }
            try {
                let medico = JSON.parse(localStorage.getItem('medico'));
                let token = JSON.parse(getToken());
                const requestOptions = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', 'token': token }
                };
                await fetch(env.URL_SERVER + '/especialidad', requestOptions).
                    then(async response => {
                        const data = await response.json();
                        setEspecialidad(data);
                        setLogged(true);
                        setLoading(false);
                    })
                    .catch(error => {
                        this.setState({ errorMessage: error.toString() });
                        console.error('Servidor apagado!', error);
                    });
                setMedico(localStorage.getItem('medico'))
                setUs(localStorage.getItem('usuario'))
            } catch (error) {
                console.log('===========' + error)
            }
        }
        data();
    }, []);

    const procesarFormulario = (data, e) => {

    }

    let html
    if (loading) {
        html = <div>Cargando</div>
    } else {
        if (getToken() == null) {
            Router.push('/login');
        } else {
            html =
                <Container usuario={user} logged={logged}>
                    <div className="form-v5-content">
                        <h2 className="text-center">Perfil</h2>
                        <form>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault01">Name</label>
                                    <input type="text" className="form-control" id="validationDefault01" defaultValue={us.name} placeholder="Name"></input>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault02">Username</label>
                                    <input type="text" className="form-control" id="validationDefault02" defaultValue={us.username} placeholder="Username" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationDefault03">e-mail</label>
                                    <input type="email" className="form-control" id="validationDefault03" defaultValue={us.email} required placeholder="Email" />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault05">Cedule</label>
                                    <input type="text" className="form-control" id="validationDefault05" defaultValue={medico.cedula} required placeholder="Cedula" />
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="validationDefault04">State</label>
                                    <select className="custom-select" id="validationDefault04" required>
                                        <option selected disabled defaultValue="">Specialtys</option>
                                        {
                                            especialidad.map(especialidad => (
                                                <option key={especialidad.id}>{especialidad.especialidad}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </form>
                    </div>
                </Container>
        }
    }

    return (
        <Main title='Lista de consultas'>
            {html}
        </Main>
    )
}

export default Especialidad;