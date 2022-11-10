import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import {Login} from "./Login";
import {About} from "./About";
import {Blog} from "./Blog";

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/blog" element={<Blog />}/>
            </Routes>
        </div>
    )
}

export default AllRoutes