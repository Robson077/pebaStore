import { Logo, Button, Container, ContainerSec, ContainerTitle, ContainerFoto } from "./styles";
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

import fotoHome from "../../assets/fotoHome.jpg"

function Home() {
    return (
        <Container>
            <header>
                <Logo>Peba Store</Logo>
            </header>

            <ContainerSec>
                <ContainerTitle>
                    <h2>Bem vindo ao Peba Store</h2>
                </ContainerTitle>

                <Button><Link to="/SignIn"><BsArrowRight size={35} color="#fff"/></Link></Button>

                <ContainerFoto>
                    <img src={fotoHome} />
                </ContainerFoto>
            </ContainerSec>
        </Container>
    )
}

export default Home