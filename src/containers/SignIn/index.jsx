import { Container, Title, Form, LabelEmail, InputEmail, LabelSenha, InputSenha, Redes, Button, Direcionamentos, SignUp, ContainerFoto } from "./styles"

import { BsFacebook, BsGoogle, BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link } from "react-router-dom"


import { useState } from "react"

import fotoBack from "../../assets/bela-praia.jpg"

function SignIn() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    return (
        <ContainerFoto img={fotoBack}>
            <Container>
                <Link to="/"><BsArrowLeft size={35} color="#000"/></Link>

                <Title>Sign In</Title>

                <Form>
                    <LabelEmail>
                    Email
                        <InputEmail 
                            type="email" 
                            placeholder="Digite seu email..." 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </LabelEmail>

                    <LabelSenha>
                        Senha
                        <InputSenha 
                            type="password" 
                            placeholder="Digite sua senha..."
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </LabelSenha>

                    <Link to="/">Esqueceu a senha?</Link>
                </Form>

                <Redes>
                    <BsFacebook size={60}/>
                    <BsGoogle size={60}/>
                </Redes>

                <Direcionamentos>
                    <Link to="/SignUp"><SignUp>Sign Up</SignUp></Link>
                    <Link to="/Content"><Button><BsArrowRight size={35} color="#fff"/></Button></Link>
                    <Button><BsArrowRight size={35} color="#fff"/></Button>
                </Direcionamentos>
            
            </Container>
        </ContainerFoto>
    )
}

export default SignIn