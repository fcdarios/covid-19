import {useEffect, useState} from 'react'
const Country = ({casos}) => {

    const [mexico, setMexico] = useState({
        active_cases: "0",
        cases: "0",
        country_name: "0",
        deaths: "0",
      });

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                            <div className="col-3"><img src={casos.urlFlag} width={60}  /></div>
                            <div className="col"> {casos.country_name}</div>
                    </div>
                </div>
                <div className="row body">
                    <div className="col-12">
                        Confirmados: {casos.cases}
                    </div>
                    <div className="col-12">
                        Defunciones: {casos.deaths}
                    </div>
                    <div className="col-12">
                        Activos: {casos.active_cases}
                    </div>
                    <div className="col-12">
                        total_recovered: {casos.total_recovered}
                    </div>
                    <div className="col-12">
                    deaths_per_1m_population: {casos.deaths_per_1m_population}
                    </div>
                    <div className="col-12">
                    tests_per_1m_population: {casos.tests_per_1m_population}
                    </div>
                    <div className="col-12">
                    total_tests: {casos.total_tests}
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Country
