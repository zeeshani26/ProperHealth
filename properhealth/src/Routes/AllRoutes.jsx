import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import About from "./About";
import {Blog} from "./Blog";
import {Support} from "./Support"
import Signup from "./Signup"
import SinglePage from "./SinglePage";

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/blog/:article" element={<SinglePage />}/>
                <Route path="/support" element={<Support />}/>
                
            </Routes>
        </div>
    )
}

export default AllRoutes