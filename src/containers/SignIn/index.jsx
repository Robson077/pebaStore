import { Container, Title, Form, LabelEmail, InputEmail, LabelSenha, InputSenha, Redes, Button, Direcionamentos, SignUp } from "./styles"

import { BsFacebook, BsInstagram, BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link } from "react-router-dom"

// import { auth } from "../../firebase/config"
// import { createUserWithEmailAndPassword } from "firebase/auth"

// import { useState } from "react"

function SignIn() {

    // const [email, setEmail] = useState("")
    // const [senha, setSenha] = useState("")

    // const handleLogin = async() => {
    //     try {
    //         await createUserWithEmailAndPassword(auth, email, senha)
    //         console.log("login secesso")

    //     } catch (error) {
    //         console.error("Erro de login:", error)
    //     }
    // }

    return (
        <Container>
            <Link to="/"><BsArrowLeft size={35} color="#000"/></Link>

            <Title>Sign In</Title>

            <Form>
                <LabelEmail>
                Email
                    <InputEmail 
                        type="email" 
                        placeholder="Digite seu email..." 
                        // value={email} 
                        // onChange={(e) => setEmail(e.target.value)}
                        />
                </LabelEmail>

                <LabelSenha>
                    Senha
                    <InputSenha 
                        type="password" 
                        placeholder="Digite sua senha..."
                        // value={senha} 
                        // onChange={(e) => setSenha(e.target.value)}
                        />
                </LabelSenha>

                <Link to="/RecuperarSenha">Esqueceu a senha?</Link>
            </Form>

            <Redes>
                <BsFacebook size={60}/>
                <BsInstagram size={60}/>
            </Redes>

            <Direcionamentos>
                <Link to="/SignUp"><SignUp>Sign Up</SignUp></Link>
                <Button><BsArrowRight size={35} color="#fff"/></Button>
            </Direcionamentos>
        </Container>
    )
}

export default SignIn