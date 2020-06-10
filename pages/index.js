import Main from '../components/Main';
import Container from '../components/Container';
import { useEffect, useState } from 'react'


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
    html = <div>Cargando</div>
  } else {
    html =
      <Container usuario={user} logged={logged} >
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="3984558.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="invoice.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="services.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Container>
  }

  return (
    <Main title='Home'>
      {html}
    </Main>
  )
}



export default Index