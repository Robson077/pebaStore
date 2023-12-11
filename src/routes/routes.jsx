import { Route, Routes } from "react-router-dom"

import Content from "../containers/Content"
import Home from "../containers/Home"
import SignIn from "../containers/SignIn"
import SignUp from "../containers/SignUp"
import Detalhes from "../containers/Detalhe"

function Router() {

    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Content" element={<Content />} />
                <Route path="/Detalhes/:id" element={<Detalhes />} />
            </Route>
        </Routes>
    )
}

export default Router