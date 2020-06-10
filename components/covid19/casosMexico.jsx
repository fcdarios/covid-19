
const CasosMexico = ({title}) => {


    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="row body">
                    <div className="col-12">
                        Confirmados
                    </div>
                    <div className="col-12">
                        Defunciones
                    </div>
                    <div className="col-12">
                        Recuperados
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default CasosMexico
