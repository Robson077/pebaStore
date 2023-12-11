
import { Container, ContainerFoto, Header, Logo, Button, Filtros } from "./styles"
import { IoIosAdd } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from "../../components/Card";

import fotoBack from "../../assets/bela-praia.jpg"

import CardTemp from "../../components/CardTemp";
import { useEffect, useState } from "react";

import {useNavigate} from "react-router-dom"
import axios from "axios";

function Content() {
    const [dataBase, setDb] = useState()
    const [filtros, setFiltros] = useState([])
    const navigate = useNavigate()

    const api = axios.create({
        baseURL: "http://localhost:3000"
    })

    useEffect(() => {
        api.get("/content").then((res) => {
            console.log(res.data)
            
            setDb(res.data)
        })
        
    }, [])
    
    async function isCasa() {

        const dbCasa = dataBase.filter(info => info.type == "casa")
    
        setFiltros(dbCasa)
    }

    function isMercado() {

        const dbMercado = dataBase.filter(info => info.type == "supermercado")

        setFiltros(dbMercado)
    }

    function isRestaurante() {

        const dbRestaurante = dataBase.filter(info => info.type == "restaurante")

        setFiltros(dbRestaurante)
        
    }

    function isPessoa() {

        const dbPessoa = dataBase.filter(info => info.type == "pessoa")

        setFiltros(dbPessoa)
        
    }

    
    return (
        <Container>
            <ContainerFoto img={fotoBack}>
                <Header>
                    <Logo>Peba <span>Store</span></Logo>

                    <Button><IoIosAdd size={25}/></Button>
                </Header>

                <h2>Clima no Pontal do Peba</h2>

                <CardTemp />

                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className="swiper"
                >

                    <SwiperSlide><Filtros onClick={isCasa}>Casas</Filtros></SwiperSlide>
                    <SwiperSlide><Filtros onClick={isMercado}>Supermercados</Filtros></SwiperSlide>
                    <SwiperSlide><Filtros onClick={isRestaurante}>Restaurantes</Filtros></SwiperSlide>
                    <SwiperSlide><Filtros onClick={isPessoa}>Pessoas</Filtros></SwiperSlide>

                </Swiper>

                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className="swiper"
                >
                    {
                        dataBase && filtros ? (
                            filtros == "" ? isCasa() :
                            filtros.map((info, index) => (
                                    <SwiperSlide key={index}>
                                        <Card
                                            id={info.id}
                                            onClick={() => navigate(`/Detalhes/${info.id}`)}
                                            type={info.type}
                                            img={info.urlImg}
                                            nomeDaPessoa={info.nomeDaPessoa}
                                            nomeEstabelecimento={info.nomeEstabelecimento}
                                            profissão={info.profissão}
                                        />
                                    </SwiperSlide>
                                ))
                        ) : ""
                    }
                </Swiper>

            </ContainerFoto>
        </Container>
    )
}

export default Content