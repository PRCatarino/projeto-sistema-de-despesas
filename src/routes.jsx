import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/Users";
import Table from "./components/table/table";


export default function Routers() {
    const users = [{id:'1', email: 'kkasda@gmail.com', name:'kayk'},
                {id:'2', email: 'aksdksa@gmail.com', name:'joao'}]
    return(
        <BrowserRouter>
            <Routes>
                <Route path= '/' element={<Home/>} />
                <Route path= 'usuarios' element={<Users/>} />
                <Route path= 'table' element={<Table/>}/>
            </Routes>
        </BrowserRouter>
    );
}