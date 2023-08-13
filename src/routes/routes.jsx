import { Route, Routes } from "react-router-dom"

import Home from "../containers/Home"
import SignIn from "../containers/SignIn"

function Router() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<SignIn />} />
            </Route>
        </Routes>
    )
}

export default Router