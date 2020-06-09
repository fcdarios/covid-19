import Main from '../../../components/Main';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router';
import env from '../../../env.json'
import { getToken } from '../../../src/token'
import Link from "next/link";

const id = (res) => {
    const router = useRouter()
    const { id } = router.query

    const [loading, setLoading] = useState(true);
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
        console.log(id)
        if (id == null) {
            setLoading(true);
        } else {
            data();
        }
        async function data() {
            setUser(JSON.parse(localStorage.getItem('usuario')));
            if (!getToken()) {
                Router.push('/');
                console.log("Sin token");
                return;
            }
            try {
                setLoading(false);
                setLogged(true);
                console.log(id)
            } catch (error) {
                console.log('===========' + error)
            }
        }
    }, [loading]);

    let html
    if (loading) {
        html = <div>Cargando</div>
    } else {
        if (getToken() == null) {
            Router.push('/login');
        } else {
            html =
                <Container usuario={user} logged={logged}>
                    <div className="card col-md-8 p-3 offset-md-2">
                        <div className="card-body">
                            <h5 className="card-title">Prescribe</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Prescribe</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Prescribe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Description"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Send</button>
                            </form>
                        </div>
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

export default id;