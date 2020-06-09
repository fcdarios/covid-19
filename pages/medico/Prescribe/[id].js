import Main from '../../../components/Main';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router';
import env from '../../../env.json'
import { getToken } from '../../../src/token'
import Link from "next/link";
import {getMedico, getUsuario} from '../../../src/data'

const Id = (res) => {
    const router = useRouter()
    const { id } = router.query

  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [medico, setMedico] = useState(null);
  const [logged, setLogged] = useState(false);
  const [loadId, setLoadId] = useState(false);



  useEffect(() =>  {
    async function data(){
      if (!getToken()) {
        Router.push('/');
        console.log("Sin token");
        return;
      }else {
        let u = await getUsuario();
        let p = await getMedico();
        setMedico(JSON.parse(p))
        setUsuario(JSON.parse(u))
        if(usuario  && medico){
          setLogged(true)
          setLoading(false)
        }else {
          setLoading(false)
        }
      }
    }

    data();    
   
  },[loading, id]);

  useEffect(()=>{
      if(id){
        console.log("Aqui hacer peticiones")












      }
  },[id])
  


    let html
    if (loading) {
        html = <div>Cargando</div>
    } else {
        
        html =
            <Container usuario={usuario} logged={logged}>
                <div className="card col-md-8 p-3 offset-md-2">
                    <div className="card-body">
                        <h5 className="card-title">Prescribe</h5>
                        <form>
                            
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Prescribe</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Prescribe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Description"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </Container>
    }


    return (
        <Main title='Lista de consultas'>
            {html}
        </Main>
    )
}

export default Id;