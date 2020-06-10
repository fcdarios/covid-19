import Main from '../../components/Main';
import Container from '../../components/Container';
import { useEffect, useState } from 'react'
import Router from 'next/router';
import Link from "next/link";
const Index = () => {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('usuario') != null) {
      setUser(JSON.parse(localStorage.getItem('usuario')));
      setLogged(true);
    }
    setLoading(false);
  }, []);


  let html
  if (loading) {
    html = <div></div>
  } else {
    if (localStorage.getItem('token') == null) {
      Router.push('/login');
    } else {
      html =
        <Container usuario={user} logged={logged} >
          <div className="row">
            <div className="col-sm-4">
              <div className="card mb-3 text-center">
                <img src="/3984558.jpeg" className="card-img-top" alt="Consultations" />
                <div className="card-body">
                  <Link href="/medico/Consultations">
                    <a className="nav-link">
                      <button className="btn btn-secondary">Show consultations</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card mb-3 text-center">
                <img src="/services.jpg" className="card-img-top" alt="Consultations" />
                <div className="card-body">
                  <Link href="/medico/Services">
                    <a className="nav-link">
                      <button className="btn btn-secondary">Show services</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card mb-3 text-center">
                <img src="/invoice.jpeg" className="card-img-top" alt="Consultations" />
                <div className="card-body">
                  <Link href="/medico/Invoice">
                    <a className="nav-link">
                      <button className="btn btn-secondary">Show invoice</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card mb-3 text-center">
                <img src="/specialty.png" className="card-img-top" alt="Consultations" />
                <div className="card-body">
                  <Link href="/medico/Specialty">
                    <a className="nav-link">
                      <button className="btn btn-secondary">Specialty</button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
    }
  }

  return (
    <Main title='Medico'>
      {html}
    </Main>
  )
}



export default Index