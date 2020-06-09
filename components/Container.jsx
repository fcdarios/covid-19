import Head from 'next/head'
import Navigation from '../components/Navigation'

const Container = (props) => {
    return (
        <div>
            <Navigation usuario={props.usuario} logged={props.logged}/>
            <div className="container-fluid p-4 m-0 main">
                
                {props.children}
            </div>
        </div>
    )
}

export default Container
