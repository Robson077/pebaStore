import { Container, Title, Form, LabelEmail, InputEmail, LabelSenha, InputSenha, Redes, Button, Direcionamentos, SignUp } from "./styles"

import { BsFacebook, BsGoogle, BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link, useNavigate } from "react-router-dom"

import { auth, provider, providerFace } from "../../services/firebase-config"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

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

    const handleSignWithGoogle = async() => {
        try {
            const result = await signInWithPopup(auth, provider)

            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken

            const user = result.user
            console.log(token)
            console.log(user)
            navigate("/Content")
        } catch (error) {
            console.error(error)
        }
    }

    const handleSignWithFacebook = async() => {
        try {
            const result = await signInWithPopup(auth, providerFace)

            const credential = FacebookAuthProvider.credentialFromResult(result)
            const token = credential.accessToken

            const user = result.user
            console.log(token)
            console.log(user)
            navigate("/Content")
        } catch (error) {
            console.error(error)
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

                <Link to="/">Esqueceu a senha?</Link>
            </Form>

            <Redes>
                <BsFacebook size={60} onClick={handleSignWithFacebook} />
                <BsGoogle size={60} onClick={handleSignWithGoogle}/>
            </Redes>

            <Direcionamentos>
                <Link to="/SignUp"><SignUp>Sign Up</SignUp></Link>
                <Button onClick={handleSignIn}><BsArrowRight size={35} color="#fff"/></Button>
            </Direcionamentos>
        </Container>
    )
}

export default SignIn