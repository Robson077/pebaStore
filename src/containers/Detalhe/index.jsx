
import { useEffect, useState } from "react";
import api from "../../services/api";
import { BsArrowLeft } from "react-icons/bs"

import { useParams, Link } from "react-router-dom";

import fotoBack from "../../assets/bela-praia.jpg"

import { ContainerFoto, Container, Button } from "./styles"

// eslint-disable-next-line react/prop-types
function Detalhes() {

    const [data, setData] = useState()

    const {id} = useParams();

    useEffect(() => {
        api.get(`/detalhe/${id}`).then((res) => {
            console.log(res.data)
            
            setData(res.data)
        })
        
    }, [id])
    
    return(
        <ContainerFoto img={fotoBack}>
            {
                data && (
                    <Container>
                        <Button><Link to="/SignIn"><BsArrowLeft size={35} color="#fff"/></Link></Button>
                        <img src={data.urlImg} alt=""/>
                        <p>Tipo: <span>{data.type}</span></p>
                        {
                            data.nomeDaPessoa && (
                                <p>Proprietario: <span>{data.nomeDaPessoa}</span></p>
                            )
                        }
                        
                        {
                            data.aluga && (
                                <p>Aluga-se: <span>{data.aluga == true ? "Sim" : "Não"}</span></p>
                            )
                        }
                        {/* <p>Proprietario: <span>{data.nomeDaPessoa}</span></p> */}

                        
                        {
                            data.preço && (
                                <p>Preço: <span>{data.preço.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span></p>
                            )
                        }
                    </Container>
                )
            }
        </ContainerFoto>
    )
}

export default Detalhes