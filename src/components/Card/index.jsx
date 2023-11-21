import casa from "../../assets/casa.jpg"

import { Container, Stars } from "./styles.js"

import { RiStarSFill } from "react-icons/ri";

function Card() {
    return (
        <Container>
            <img src={casa}/>

            <Stars>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill size={25}/>
            </Stars>
        </Container>
    )
}

export default Card