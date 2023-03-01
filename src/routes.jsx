import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/Users";


export default function Routers() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path= '/' element={<Home/>} />
                <Route path= 'usuarios' element={<Users/>} />
            </Routes>
        </BrowserRouter>
    );
}