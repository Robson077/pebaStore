
import { Container, ContainerFoto, Header, Logo, Button, P } from "./styles"
import { IoIosAdd } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from "../../components/Card";

import fotoBack from "../../assets/bela-praia.jpeg"

// import casa from "../../assets/casa.jpg"
import db from "../../services/db";
import CardTemp from "../../components/CardTemp";
// import api from "../../services/api";

function Content() {
    const dbCasa = db.filter(info => info.type == "casa")
    
    const dbMercado = db.filter(info => info.type == "supermercado")

    
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
                
                    <SwiperSlide><P>Casas</P></SwiperSlide>
                    <SwiperSlide><P>Supermercados</P></SwiperSlide>
                    <SwiperSlide><P>Restaurantes</P></SwiperSlide>
                    <SwiperSlide><P>Pessoas</P></SwiperSlide>

                </Swiper>

                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className="swiper"
                >
                {
                    dbCasa.map((info, index) => (
                        <SwiperSlide key={index}>
                            <Card type={info.type} img={info.urlImg} alugatrue={true} nomeDono={info.dono} nomeDonoTrue={true} aluga={info.aluga}/>
                        </SwiperSlide>
                    ))
                }
                </Swiper>

                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={"auto"}
                    className="swiper"
                >
                    {
                        // const dbMercado = db.filter(info => info.type == "supermercado")
                        
                        dbMercado.map((info, index) => (
                                <SwiperSlide key={index}>
                                    <Card img={info.urlImg} nomeEstabelecimento={info.nomeEstabelecimento} nomeEstabelecimentoTrue={true}/>
                                </SwiperSlide>
                            )
                        )
                    }
                </Swiper>
            </ContainerFoto>
        </Container>
    )
}

export default Content