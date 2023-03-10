import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/Users";
import Table from "./components/table/table";
import Category from "./pages/Categories";

export default function Routers() {
    

    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='users' element={<Users/>} />
            <Route path='table' element={<Table/>} />
            <Route path='category' element={<Category/>} />
            <Route path='users/:id' element={<Users/>} />
        </Routes>
    );
}