import Head from 'next/head'


const Main = (props) => {
    return (
        <div>
            <Head>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
                <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/materia/bootstrap.min.css" rel="stylesheet" integrity="sha384-uKLgCN8wZ+yo4RygxUNFhjywpL/l065dVTzvLuxys7LAIMmhZoLWb/1yP6+mF925" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Poppins&family=Raleway&family=Roboto&display=swap" rel="stylesheet"></link>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
                <title>{props.title}</title>
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Main
