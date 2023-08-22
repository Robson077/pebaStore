import { Container, Title, Form, LabelEmail, InputEmail, LabelSenha, InputSenha, Redes, Button, Direcionamentos, } from "./styles"

import { BsFacebook, BsInstagram, BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Link, useNavigate } from "react-router-dom"


import { auth } from "../../firebase/config"
import { createUserWithEmailAndPassword} from "firebase/auth"

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
                <BsInstagram size={60}/>
            </Redes>

            <Direcionamentos>
                <Button onClick={handleCreateUser}><BsArrowRight size={35} color="#fff"/></Button>
                {/* <Button onClick={handleSignOut}>LogOut</Button> */}
            </Direcionamentos>
        </Container>
    )
}

export default SignUp