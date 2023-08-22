import { Container, Title, Form, LabelEmail, InputEmail, LabelSenha, InputSenha, Redes, Button, Direcionamentos, SignUp } from "./styles"

import { BsFacebook, BsInstagram, BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link, useNavigate } from "react-router-dom"

import { auth } from "../../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

import { useState } from "react"

function SignIn() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSignIn = async() => {
        try {
            if(email.length && senha.length) {
                const userCredetial = await signInWithEmailAndPassword(auth, email, senha)
                const user = userCredetial.user
                
                console.log(user)
                console.log("logou")
                navigate("/Content")
            } else {
                alert("Digite email e senha")
            }
        } catch (error) {
            alert("Email ou Senha estão incorretos")
            console.error("teste", error)
        }
    }

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

                <Link to="/RecuperarSenha">Esqueceu a senha?</Link>
            </Form>

            <Redes>
                <BsFacebook size={60}/>
                <BsInstagram size={60}/>
            </Redes>

            <Direcionamentos>
                <Link to="/SignUp"><SignUp>Sign Up</SignUp></Link>
                <Button onClick={handleSignIn}><BsArrowRight size={35} color="#fff"/></Button>
            </Direcionamentos>
        </Container>
    )
}

export default SignIn