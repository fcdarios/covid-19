import Main from '../components/Main';
import Container from '../components/Container';
import {useEffect, useState} from 'react'
import Products from '../components/ProductsCart';

const Cart = () => {
  
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);

  useEffect(() =>  {
    if (localStorage.getItem('usuario') != null) {
      setUser(JSON.parse(localStorage.getItem('usuario')));
      setLogged(true);
    }
    setLoading(false);
  }, []);
  let data =localStorage.getItem('cart')+"]";
  let html
  if (loading) {
    html = <div></div>
  }else{
    html = 
    <Container usuario={user} logged={logged} >
        <div className="container mb-5 mt-10">
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6 mb-6">
            <h1>Carrito</h1>
        </div>
      </div>
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
        <Products products = {data}/>
        </div>
      </div>
    </div>
    </Container>
  }

  return ( 
    <Main title='Cart' >
      {html}
    </Main>
  )
}
export default Cart