import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import Loading from '../../components/Loading'

import Casos from '../../components/covid19/casosMexico'
import CardOption from '../../components/covid19/CardOption'

import {useEffect, useState} from 'react'
import Link from "next/link";
const Index = () => {

  const [loading, setLoading] = useState(0);
  const [usuario, setUsuario] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [logged, setLogged] = useState(false);


  const [mexico, setMexico] = useState({
    active_cases: "0",
    cases: "0",
    country_name: "0",
    deaths: "0",
  });



  const [global, setGlobal] = useState(null);

  let [inffectedCountries, setinffectedCountries] = useState([]);
  let [updatedAt, setUpdatedAt] = useState([]);
  let [cargados, setCargados] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      let inffectedCountriesResponse = await fetch(
        'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
        {
          headers: {
            'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
            'x-rapidapi-key': 'b977b4931cmshc1242005fd952fep1abf72jsn9013efcf73e7',
          },
        },
      );

      let allCountriesResponse = await fetch('https://restcountries.eu/rest/v2/all');

      let allCountries = [];
      if (allCountriesResponse.ok) {
        allCountries = await allCountriesResponse.json();
      }

      if (inffectedCountriesResponse.ok) {
        let { countries_stat, statistic_taken_at } = await inffectedCountriesResponse.json();
        setinffectedCountries(
          countries_stat.map(stat => {
            let countryFound = allCountries.find(
              country =>
                country.name.toUpperCase().indexOf(stat.country_name.toUpperCase()) != -1 ||
                country.altSpellings.findIndex(
                  alt => alt.toUpperCase().indexOf(stat.country_name.toUpperCase()) != -1,
                ) != -1,
            );
            if (!countryFound) countryFound = {};
            return {
              ...stat,
              urlFlag: countryFound.flag,
              latlng: countryFound.latlng,
            };
          }),
        );
        
        setCargados(1);

        setUpdatedAt(statistic_taken_at);
      }
    };

    fetchData();
  }, []);



  useEffect(() =>  {
    if(cargados == 1){
      inffectedCountries.forEach(element => {
        if (element.country_name == 'Mexico') {
          
          setMexico(element)
        }
        console.log(element)
      });
      
    }
  },[cargados]);


  useEffect(() =>  {
    async function data(){
      if(loading != 2){
        let u = await getUsuario();
        
       
        setUsuario(JSON.parse(u))
        if(usuario){
          setLogged(true)
          setLoading(2)
        }else {
          setLoading(1)
        }
      }
    }
    data();
  },[loading]);


  
  let html
  if (loading != 2) {
    html = <div><Loading/></div>
  }else{
    html = 
    <Container usuario={usuario} logged={logged}>
      <div className="covid">
        <div className="row">
          <div className="col-4">
            <Casos casos={mexico} />
          </div>
          <div className="col-4">
            <div className='cardOption'>
              <div className="card text-center">
                  <img src="/coronavirus.png" className="card-img-top" alt="Consultations" />
              <div className="card-body">
                  <Link href="/covid19/allcountries">
                  <a className="nav-link">
                      <button className="btn btn-primary">Todos los paises</button>
                  </a>
                  </Link>
              </div>
              </div>
          </div>
          </div>
          <div className="col-4">
              <div className='cardOption'>
                <div className="card text-center">
                    <img src="/mapa.jpg" className="card-img-top" alt="Consultations" />
                <div className="card-body">
                    <Link href="/covid19/map">
                    <a className="nav-link">
                        <button className="btn btn-primary">Ver Mapa</button>
                    </a>
                    </Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  }

  return ( 
    <Main title='Paciente'>
      {html}
    </Main>
  )
}

export default Index

