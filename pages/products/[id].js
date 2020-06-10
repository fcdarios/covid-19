import { useRouter } from "next/router";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import Main from '../../components/Main';
import Container from "../../components/Container";
import {useEffect, useState} from 'react'
const Product = (props) => {
  let product = props.products
  const router = useRouter();
  const { id } = router.query;

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  let ant;
  
  const handleClose = () => {
    if (localStorage.getItem('cart')==null) {
      localStorage.setItem('cart', "["+JSON.stringify(product));
    } else {
      ant=localStorage.getItem('cart');
      localStorage.setItem('cart', ant+","+JSON.stringify(product));
    }
    Router.push('/store', '/store');
  };

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
      html=
 <Container usuario={user} logged={logged} >
   <div className="row">
     <div className="col-md-6 offset-md-3">
       <div className="card">
         <div className="card-header text-center">
           <img
             src={product.images[0].src}
             alt={product.name}
           />
         </div>
         <div className="card-body text-center">
           <h2>
           {product.name} 
           </h2>
           <h3>
           {product.short_description}
           </h3>
           <h4>Precio: {product.price}</h4>
           <p>Descripcion: {product.description} </p>
         <button className=" btn btn-info ml-2" onClick={() => Router.push(`/store`, `/store`)} s>Back</button>
         <button className="btn btn-success " onClick={handleClose} s>Add to cart</button>
         </div>
       </div>
     </div>
   </div>
 </Container>
  }
  return (
    <Main title='Tienda'>
      {html}
    </Main>
  );
};

Product.getInitialProps = async (ctx) => {
  const res = await fetch(`https://dev-covid-19-itc.pantheonsite.io/wp-json/wc/v3/products/${ctx.query.id}`,
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

export default Product;