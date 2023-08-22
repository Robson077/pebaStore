import { Button } from "./styles"

import { useNavigate } from "react-router-dom"

import { auth } from "../../firebase/config"
import { signOut } from "firebase/auth"

function Content() {
    const navigate = useNavigate()

    const handleSignOut = async() => {
        try {
            await signOut(auth)
            console.log("deslogou")
            navigate("/")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h1>Conteudo</h1>

            <Button onClick={handleSignOut}>LogOut</Button>
        </div>
    )
}

export default Content