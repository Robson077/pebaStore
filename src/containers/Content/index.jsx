
import { Container, ContainerFoto, Header, Logo, Button, Filtros } from "./styles"
import { IoIosAdd } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from "../../components/Card";

import fotoBack from "../../assets/bela-praia.jpg"

// import casa from "../../assets/casa.jpg"
import db from "../../services/db";
import CardTemp from "../../components/CardTemp";
import { useState } from "react";
// import api from "../../services/api";

function Content() {
    const [filtros, setFiltros] = useState([])

    
    // const dbMercado = db.filter(info => info.type == "supermercado")
    const dbCasa = db.filter(info => info.type == "casa")
    
    function isFilter() {

        const dbCasa = db.filter(info => info.type == "casa")
    
        setFiltros(dbCasa)
        console.log(filtros)
        
    }

    function isMercado() {

        const dbMercado = db.filter(info => info.type == "supermercado")

        setFiltros(dbMercado)
        console.log(filtros)
        
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
                
                    <SwiperSlide><Filtros onClick={isFilter}>Casas</Filtros></SwiperSlide>
                    <SwiperSlide><Filtros onClick={isMercado}>Supermercados</Filtros></SwiperSlide>
                    <SwiperSlide><Filtros>Restaurantes</Filtros></SwiperSlide>
                    <SwiperSlide><Filtros>Pessoas</Filtros></SwiperSlide>

                </Swiper>

                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className="swiper"
                >
                {filtros == "" ? setFiltros(dbCasa) :
                    filtros.map((info, index) => (
                        <SwiperSlide key={index}>
                            <Card type={info.type} img={info.urlImg} alugatrue={true} nomeDono={info.dono} nomeDonoTrue={true} aluga={info.aluga}/>
                        </SwiperSlide>
                    ))
                }
                </Swiper>

            </ContainerFoto>
        </Container>
    )
}

export default Content