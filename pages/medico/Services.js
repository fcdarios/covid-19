import Main from '../../components/Main';
import Container from '../../components/Container';
import { useEffect, useState } from 'react'
import Router from 'next/router';
import env from '../../env.json'
import { getToken } from '../../src/token'
import Link from "next/link";

const Services = () => {


    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
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
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'token': token }
                };
                console.log(user)
                setLogged(true);
                setLoading(false);
                /*await fetch(env.URL_SERVER + '/medico_servicio/', requestOptions).
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
                    });*/
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
            html =
                <Container usuario={user} logged={logged}>
                    <Link href={"/medico/Services/Add"}>
                        <a className="nav-link">
                            <button className="btn btn-primary btn-lg btn-block">Add</button>
                        </a>
                    </Link>
                </Container>
        }
    }

    return (
        <Main title='Lista de consultas'>
            {html}
        </Main>
    )
}

export default Services;