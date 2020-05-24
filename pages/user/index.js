import Head from 'next/head';
import Container from '../../components/Container';
import ListUsers from '../../components/ListUsers';
const User = (props) => {
  return ( 
    <div>
      <Head>
        <title>User</title>
      </Head>
      <Container>
         <h1>Usuarios</h1>
         <ListUsers usuarios={props.usuarios}/>
      </Container>
    </div>
  )
}

User.getInitialProps = async (ctx) => {
  // url de la API el otro proyeto
  const res = await fetch('http://localhost:3000/user')
  const json = await res.json()
  return { usuarios : json }
}

export default User