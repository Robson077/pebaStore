
import { Container, Header, Logo, Button, P } from "./styles"
import { IoIosAdd } from "react-icons/io";

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from "../../components/card";

function Content() {

    return (
        <Container>
            <Header>
                <Logo>Peba <span>Store</span></Logo>

                <Button><IoIosAdd size={25}/></Button>
            </Header>

            <h2>Top casas para alugar</h2>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={"auto"}
                className="swiper"
            >
            
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>

            </Swiper>

            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={"auto"}
                className="swiper"
            >
            
                <SwiperSlide><P>Casas</P></SwiperSlide>
                <SwiperSlide><P>Restaurantes</P></SwiperSlide>
                <SwiperSlide><P>Supermercados</P></SwiperSlide>
                <SwiperSlide><P>Pessoas</P></SwiperSlide>

            </Swiper>
        </Container>
    )
}

export default Content