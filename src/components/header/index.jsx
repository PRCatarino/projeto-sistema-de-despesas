import './header.css'
import { Link, parsePath } from 'react-router-dom';

function Header(props) {

    return(
        <>
            <header className="home-header">
                <Link to="/">Despesas </Link>
                <Link to="/users">| Usuários</Link>
                <Link to="/category">| Categorias</Link>
            </header>
            <div className='locationPage'>{props.location}</div>
        </>
    )
}
export default Header;