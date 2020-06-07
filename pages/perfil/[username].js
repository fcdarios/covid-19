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
     const [user, setUser] = useState(null);


     useEffect(() =>  {
          async function cargandoPerfil() {

               if (!getToken()) {
                    Router.push('/');
                    console.log("Sin token");
                    return;
               }
               try {
                    let token = getToken()

                    const requestOptions = {
                         method: 'GET',
                         headers: { 'Content-Type': 'application/json', 'token' : token }
                    };
                    
                    console.log(token)

                    fetch(env.URL_SERVER+'/user/perfil', requestOptions).
                         then(async response => {
                              const data = await response.json();
                              
                              console.log(data)
                              
                              
                              
                         })
                         .catch(error => {
                              this.setState({ errorMessage: error.toString() });
                              console.error('Servidor apagado!', error);
                    });
                    
               } catch (error) {
                    console.log('==========='+error)
               }

               



          }

          cargandoPerfil();         
     }, []);




     let html
     if (loading) {
          html = <div></div>
     }else{
          html = 
               <Container usuario={user} logged={true} >
                    <h1>{username}</h1>
                    <h1>{props.message}</h1>
               </Container>
     }

     return ( 
     <Main title={username} >
          {html}
     </Main>
     )
}

export default Username


function getPerfil(token) {
     console.log(token)
     
}



