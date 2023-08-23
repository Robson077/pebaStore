import { Button } from "./styles"

import { useNavigate } from "react-router-dom"

import { auth } from "../../services/firebase-config"
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
    const user = auth.currentUser
    console.log(user)

    return (
        <div>
            <img src={user.photoURL} alt="foto do perfil do google" />
            <h1>{user.displayName}</h1>

            <Button onClick={handleSignOut}>LogOut</Button>
        </div>
    )
}

export default Content