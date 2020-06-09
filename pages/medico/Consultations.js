import Main from '../../components/Main';
import Container from '../../components/Container';
import { useEffect, useState } from 'react'
import Router from 'next/router';
import env from '../../env.json'
import { getToken } from '../../src/token'
import Link from "next/link";

const Consultations = () => {


    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [consulta, setConsulta] = useState(null);
    const [paciente, setPaciente] = useState(null);
    const [sin, setSin] = useState(false);

    useEffect(() => {
        async function data() {
            setUser(JSON.parse(localStorage.getItem('usuario')));
            if (!getToken()) {
                Router.push('/');
                console.log("Sin token");
                return;
            }
            try {
                let token = JSON.parse(getToken());
                const requestOptions = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', 'token': token }
                };
                await fetch(env.URL_SERVER + '/medico/consultas/' + 1, requestOptions).
                    then(async response => {
                        const data = await response.json();
                        setLogged(true);
                        setLoading(false);
                        if (data.length) {
                            setConsulta(data);
                            setSin(true);
                        }
                    })
                    .catch(error => {
                        this.setState({ errorMessage: error.toString() });
                        console.error('Servidor apagado!', error);
                    });
            } catch (error) {
                console.log('===========' + error)
            }
        }
        data();
    }, []);

    let html
    if (loading) {
        html = <div>Cargando</div>
    } else {
        if (getToken() == null) {
            Router.push('/login');
        } else {
            if (sin) {
                html = <Container usuario={user} logged={logged}>
                    <div className="row text-center">
                        {
                            consulta.map(consulta => (
                                <div className="col-md-4 p-3" key={consulta.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{consulta.estado}</h5>
                                            <p className="card-text">{consulta.sintomas}</p>
                                            <Link href={"/medico/Prescribe/" + consulta.id}>
                                                <a className="nav-link">
                                                    <button className="btn btn-secondary">Prescribe</button>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </Container>
            } else {
                html = <Container usuario={user} logged={logged}>
                    <div className="text-center"><h3>Sin consultas</h3></div>
                </Container>
            }
        }
    }

    return (
        <Main title='Lista de consultas'>
            {html}
        </Main>
    )
}

export default Consultations;