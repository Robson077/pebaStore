// import casa from "../../assets/casa.jpg"

import { Container, Descripion, Stars } from "./styles.js"

import { RiStarSFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Card({ type, img, alugatrue, nomeDono, nomeDonoTrue, aluga, nomeEstabelecimento, nomeEstabelecimentoTrue, stars }) {
    return (
        <Container>
            <img src={img}/>
            <Descripion>

                { type == "casa" ?
                    nomeDonoTrue ? <h3>Proprietario: <span>{nomeDono}</span></h3> : "" 
                    : nomeEstabelecimentoTrue ? <h3>Nome: <span>{nomeEstabelecimento}</span></h3> : ""
                }

                { alugatrue ?
                    <p>Para alugar? {
                        aluga ? "Sim" : "Não"
                    }
                </p> : ""
                }

            </Descripion>

            {
                stars ? <Stars>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill color="#FFFF00" size={25}/>
                <RiStarSFill size={25}/>
            </Stars> : ""
            }
        </Container>
    )
}

export default Card