import Head from 'next/head'
import Navigation from '../components/Navigation'

const Container = (props) => {
    return (
        <div>
            <Navigation usuario={props.usuario} logged={props.logged}/>
            <div className="container p-3">
                
                {props.children}
            </div>
        </div>
    )
}

export default Container
