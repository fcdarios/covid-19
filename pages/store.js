import Head from 'next/head';
import Container from '../components/Container';
import fetch from "isomorphic-unfetch";
import Products from '../components/Products';

const Store = (props) => {
  console.log(props)
  return ( 
    <div>
      <Head>
      <title>Tienda</title>
      </Head>
      <Container>
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
    </div>
  )
}
Store.getInitialProps = async (ctx) => {
  const res = await fetch("https://dev-covid-19-itc.pantheonsite.io/wp-json/wc/v3/products",
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