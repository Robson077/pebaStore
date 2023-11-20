import { Logo, Button, Container, ContainerSec, ContainerTitle, ContainerFoto } from "./styles";
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

// import { auth } from "../../services/firebase-config"

import fotoBack from "../../assets/fotoBack.jpg"

function Home() {

    return (
        <Container>
            <ContainerFoto img={fotoBack}>
                <header>
                    <Logo>Peba <span>Store</span></Logo>
                </header>

                        <ContainerSec>
                                <ContainerTitle>
                                    <h2>Bem vindo ao Peba <span>Store</span></h2>
                                </ContainerTitle>

                                <Button><Link to="/SignIn"><BsArrowRight size={35} color="#fff"/></Link></Button>
                        </ContainerSec>
            </ContainerFoto>
        </Container>
    )
}

export default Home