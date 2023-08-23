import { Container, Title, Form, LabelEmail, InputEmail, LabelSenha, InputSenha, Redes, Button, Direcionamentos, } from "./styles"

import { BsFacebook, BsGoogle, BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link, useNavigate } from "react-router-dom"


import { auth, provider } from "../../services/firebase-config"
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

import { useState } from "react"

function SignUp() {
    const navigate = useNavigate()

    const user = auth.currentUser
    console.log(user)

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    

    const handleCreateUser = async() => {
        try {
            if(email.length && senha.length > 0) {
                await createUserWithEmailAndPassword(auth, email, senha)
                // history.push("/SignIn")
                console.log("Usuario criado")
                navigate("/Content")
                // redirect("/Content")
            } else {
                alert("Digite seu email e senha")
            }
            
        } catch (error) {
            console.error("Erro de login:", error)
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
    

    return (
        <Container>
            <Link to="/SignIn"><BsArrowLeft size={35} color="#000"/></Link>

            <Title>Sign Up</Title>

            <Form>
                <LabelEmail>
                Email
                    <InputEmail 
                        type="email" 
                        placeholder="Digite seu email..." 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                </LabelEmail>

                <LabelSenha>
                    Senha
                    <InputSenha 
                        type="password" 
                        placeholder="Digite sua senha..."
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)}/>
                </LabelSenha>

            </Form>

            <Redes>
                <BsFacebook size={60}/>
                <BsGoogle size={60} onClick={handleSignWithGoogle} />
            </Redes>

            <Direcionamentos>
                <Button onClick={handleCreateUser}><BsArrowRight size={35} color="#fff"/></Button>
                {/* <Button onClick={handleSignOut}>LogOut</Button> */}
            </Direcionamentos>
        </Container>
    )
}

export default SignUp