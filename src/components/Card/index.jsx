// import casa from "../../assets/casa.jpg"

import { Container, Descripion, Stars } from "./styles.js"

import { RiStarSFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Card({ id, onClick, type, img, alugatrue, aluga, nomeDaPessoa, nomeEstabelecimento, profissão, stars }) {
    return (
        <Container onClick={onClick} id={id}>
            <img src={img}/>
            <Descripion>

                { type == "casa" ?
                    <h3>Proprietario: <span>{nomeDaPessoa}</span></h3> 
                    : (<h3>Nome: <span>{nomeEstabelecimento} {nomeDaPessoa}</span></h3>)
                    
                }

                { type == "pessoa" ?
                    <h3>Profissão: <span>{profissão}</span></h3> 
                    : ""
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