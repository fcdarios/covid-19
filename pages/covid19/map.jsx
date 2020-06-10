
import Link from "next/link";
import env from '../../env.json'
import {getToken} from '../../src/token'
import {getPaciente, getUsuario} from '../../src/data'
import Main from '../../components/Main';
import Container from '../../components/Container';
import Loading from '../../components/Loading'
import Router from 'next/router';
import InffectedCountryMap from '../../components/covid19/InffectedCountryMap'

import Casos from '../../components/covid19/casosMexico'

import {useEffect, useState} from 'react'
const Map = () => {

  const [loading, setLoading] = useState(0);
  const [usuario, setUsuario] = useState(null);

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
    async function data(){
      if(loading != 2){
        let u = await getUsuario();
       
        setPaciente(JSON.parse(p))
       
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
        <div className="col-12">
          <button className='btn boton' onClick={()=> {Router.push('/covid19/')}} >
            Regresar
          </button>
        </div>

         <div className="col-12">
            <InffectedCountryMap inffectedCountries={inffectedCountries} />
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

export default Map

