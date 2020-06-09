import env from '../../env.json'
import {getToken, setToken} from '../../src/token'
import { useRouter } from 'next/router'
import Router from 'next/router';
import Main from '../../components/Main';
import Container from '../../components/Container';
import {useEffect, useState} from 'react'

const Username = (props) => {
     const router = useRouter()
     const { username } = router.query
     const [loading, setLoading] = useState(true);
     const user= {};
     
     
     
     let html
     if (loading) {
          html = <div></div>
     }else{
          html = 
               <Container usuario={user} logged={true} >
                    <h1>{name}</h1>
                    <h1>{props.message}</h1>
               </Container>
     }

     return ( 
     <Main title="a" >
          {html}
     </Main>
     )
}

export default Username

async function cargandoPerfil(username) {               
     if (!getToken()) {
          Router.push('/');
          console.log("Sin token");
          return;
     }
     try {
          let token = JSON.parse(getToken());
          const requestOptions = {
               method: 'GET',
               headers: { 'Content-Type': 'application/json', 'token' : token, 'username': username }
          };
          console.log(username)
          console.log("====================")

          fetch(env.URL_SERVER+'/user/perfil', requestOptions).
               then(async response => {
                    const data = await response.json();
                    
                    return data;
               })
               .catch(error => {
                    this.setState({ errorMessage: error.toString() });
                    console.error('Servidor apagado!', error);
          });
          
     } catch (error) {
          console.log('==========='+error)
     }
}



