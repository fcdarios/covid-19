
import Head from 'next/head'

import Navigation from '../components/Navigation';


const Container = (props) => {
    return (
       <div>
           <Head>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/materia/bootstrap.min.css" rel="stylesheet" integrity="sha384-uKLgCN8wZ+yo4RygxUNFhjywpL/l065dVTzvLuxys7LAIMmhZoLWb/1yP6+mF925" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
           </Head>
           <Navigation/>
           <div className="container p-3">
                {props.children}
           </div>
       </div>
    )
}

export default Container
