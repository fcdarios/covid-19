import {useEffect, useState} from 'react'
import Link from "next/link";
const CasosMexico = () => {

    const [mexico, setMexico] = useState({
        active_cases: "0",
        cases: "0",
        country_name: "0",
        deaths: "0",
      });

    return (
        <div className='cardOption'>
            <div className="card text-center">
                <img src="/coronavirus.png" className="card-img-top" alt="Consultations" />
            <div className="card-body">
                <Link href="/covid/allCountries">
                <a className="nav-link">
                    <button className="btn btn-primary">Todos los paises</button>
                </a>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default CasosMexico
