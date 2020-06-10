import Main from '../components/Main';
import Container from '../components/Container';
import Fetch from "isomorphic-unfetch";
import Products from '../components/Products';
import {useEffect, useState} from 'react'

const Store = (props) => {

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

  let html
  if (loading) {
    html = <div></div>
  }else{
  html = 
  <Container usuario={user} logged={logged} >
    <div className="container mb-5 mt-6">
      <div className="row">
        <div className="col-md-8">
     <h1>Farmacia ITC</h1>
        </div>
        <div className="col-md-4">
     <div className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" >Search</button>
    </div>  
        </div>
      </div>
    </div>
     <Products products = {props.products}/>
  </Container>
  }
  return ( 
    <Main title='Tienda'>
      {html}
    </Main>
  )
}
Store.getInitialProps = async (ctx) => {
  const res = await Fetch("https://dev-covid-19-itc.pantheonsite.io/wp-json/wc/v3/products",
  {
    method: "GET",
    credentials: 'include',
    headers: {
      Authorization: 'Basic '+window.btoa("ck_0e68cc1e81d9a93bcd6d1990c1bac40822e6d233:cs_2137798b89fb10209a34d7fe189f7f8714422e5d"),
    }
  });
  const data = await res.json();
  return{
    products: data
  }
};

export default Store